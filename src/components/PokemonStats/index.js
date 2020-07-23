import React from 'react'
import './index.css'

class PokemonStats extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: null,
      name: null,
      sprite: null,
      height: null,
      weight: null,
      abilities: [],
      types: [],
      stats: {
        hp: null,
        attack: null,
        defence: null,
        specialAttack: null,
        specialDefence: null,
        speed: null
      }
    }
  }

  async componentDidMount() {
    const id = this.props.match.params.id
    const pokemon = await (await fetch('https://pokeapi.co/api/v2/pokemon/' + id)).json()

    const abilities = pokemon.abilities.map(ability => {
      return ability.ability.name
    })
    
    const types = pokemon.types.map(type => {
      return type.type.name
    })

    this.setState({
      id: pokemon.id,
      name: pokemon.name,
      sprite: pokemon.sprites.front_default,
      height: pokemon.height,
      weight: pokemon.weight,
      abilities: abilities,
      types: types,
      stats: {
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defence: pokemon.stats[2].base_stat,
        specialAttack: pokemon.stats[3].base_stat,
        specialDefence: pokemon.stats[4].base_stat,
        speed: pokemon.stats[5].base_stat
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="stats-block">
              <div className="col">
                <div className="text">
                  {this.state.name} №{this.state.id}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="sprite-stat">
                    <img style={{width: '200px', height: '200px'}} src={this.state.sprite} alt={this.state.sprite}></img>
                  </div>
                </div>
                <div className="col">
                  <div className="progress-bar">
                    <label><span>HP </span><progress min={0} max={200} value={this.state.stats.hp}></progress></label>
                    <label><span>Attack </span><progress min={0} max={200} value={this.state.stats.attack}></progress></label>
                    <label><span>Defence </span><progress min={0} max={200} value={this.state.stats.defence}></progress></label>
                    <label><span>Special attack </span><progress min={0} max={200} value={this.state.stats.specialAttack}></progress></label>
                    <label><span>Special defence </span><progress min={0} max={200} value={this.state.stats.specialDefence}></progress></label>
                    <label><span>Speed </span><progress min={0} max={200} value={this.state.stats.speed}></progress></label>
                  </div>
                </div>
                <div className="col" style={{}}>
                  <div className="container">
                  <div className="row">
                    <div className="height-and-weight">
                      <span>
                        Height {this.state.height}
                        </span>
                        <span>
                        Weight {this.state.weight}
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="types-block">
                      {this.state.types.map(type => {
                        return <div className={`type-block ${type}`} key={type}>{type}</div>
                      })}
                    </div>
                  </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PokemonStats