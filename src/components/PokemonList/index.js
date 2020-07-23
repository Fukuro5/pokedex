import React from 'react'
import store from '../../redux/store.js'
import Header from '../Header/index.js'
import PokemonCard from '../PokemonCard/index.js'
import Button from '../Button/index.js'
import { isPageClickFalse, isTypeClickFalse, isInputClickFalse } from '../../redux/actions/index.js'
import './index.css'

class PokemonList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			id: [],
			name: [],
			sprite: [],
			types: [
				'normal',
				'fighting',
				'flying',
				'poison',
				'ground',
				'rock',
				'bug',
				'ghost',
				'steel',
				'fire',
				'water',
				'grass',
				'electric',
				'psychic',
				'ice',
				'dragon',
				'dark',
				'fairy',
				'unknown',
				'shadow'
			],
			page: 1,
			isTypeSet: false,
			pokemons: null
		}

		this.pageContentChange = this.pageContentChange.bind(this)
		this.typeContentChange = this.typeContentChange.bind(this)
		this.inputContentChange = this.inputContentChange.bind(this)
	}

	async componentDidMount() {
		const url = "https://pokeapi.co/api/v2/pokemon/?offset0&limit="
		const data = await (await fetch(url)).json()
		const urlAll = url + data.count
		const pokemonAll = await (await fetch(urlAll)).json()
		const pokemonUrl = []

		for(let i = 0; i < pokemonAll.results.length; i++) {
			pokemonUrl.push(pokemonAll.results[i].url)
		}

		this.setState({
			pokemons: pokemonUrl
		})

		this.pageContentChange()
	}
	
	async pageContentChange() {

		const data = this.state.pokemons, pokemon = [], pokemonNames = [], pokemonSprites = [], pokemonId = []
		let pokemonStart = 0, pokemonFinish = 20
		
		for(let i = 0; i < store.getState().page; i++) {      
			if(i > 0) {
				pokemonStart += 20
				pokemonFinish += 20
			}
		}

		if(data.length <= 20) pokemonFinish = data.length 

		for(let i = pokemonStart, j = 0; i < pokemonFinish; i++, j++) {
			pokemon.push(await (await fetch(data[i])).json())
			pokemonId.push(pokemon[j].id)
			pokemonNames.push(pokemon[j].name)
			pokemonSprites.push(pokemon[j].sprites.front_default)
		}

		this.setState({
			id: pokemonId,
			name: pokemonNames,
			sprite: pokemonSprites
		})
	}

	async typeContentChange() {
		const url = 'https://pokeapi.co/api/v2/type'
		const data = await (await fetch(url)).json()
		let urlType = ''

		for(let i = 0; i < data.results.length; i++) {
			if(data.results[i].name === store.getState().type) {
				urlType = data.results[i].url
			}
		}

		const dataType = await (await fetch(urlType)).json()
		const pokemonTypeUrl = []
		
		for(let i = 0; i < dataType.pokemon.length; i++) {
			pokemonTypeUrl.push(dataType.pokemon[i].pokemon.url)
		}

		this.setState({
			pokemons: pokemonTypeUrl
		})

		this.pageContentChange()
	}

	async inputContentChange() {
		if(store.getState().input !== '') {
			const input = store.getState().input
			const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit='
			const data = await (await fetch(url)).json()
			const urlAll = url + data.count 
			const pokemonAll = await (await fetch(urlAll)).json()
			const dataPokemon = []

			for(let i = 0; i < pokemonAll.results.length; i++) {
				if((pokemonAll.results[i].name.search(input)) !== -1) {
					dataPokemon.push(pokemonAll.results[i].url)
				}
			}

			this.setState({
				pokemons: dataPokemon
			})

			this.pageContentChange()
		} else {
			this.componentDidMount()
		}
	}

	render() {
		store.subscribe(() => {
			if(store.getState().isPageClick) {
				this.pageContentChange()
				store.dispatch(isPageClickFalse())
			}
			
			if(store.getState().isTypeClick) {
				this.typeContentChange()
				store.dispatch(isTypeClickFalse())
			}

			if(store.getState().isInputClick) {
				this.inputContentChange()
				store.dispatch(isInputClickFalse())
			}
		})

		return (
			<div>
				<header>
					<Header types={this.state.types}  />
				</header>
				<div className="container">
						<PokemonCard 
							id={this.state.id}
							name={this.state.name}
							sprite={this.state.sprite}
						/>
						<Button />
				</div>
			</div>
		)
	}
}

export default PokemonList