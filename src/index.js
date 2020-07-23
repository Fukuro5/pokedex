import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import PokemonStats from './components/PokemonStats/index.js'
import PokemonList from './components/PokemonList/index.js'
import './index.css'

class App extends React.Component {

	render() {
		return (
			<Router>
	        <Route path="/" exact component={PokemonList} />
	        <Route path="/pokemon_stats/:id" exact component={PokemonStats} />
			</Router>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)