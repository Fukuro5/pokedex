import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

class PokemonCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      name: null,
      sprite: null,
      url: []
    }
  }

  componentDidMount() {
    const { id, name, sprite } = this.props
    this.setState({
      id: id,
      name: name,
      sprite: sprite
    })
	}

  render() {
		const layout = (id, name, image) => {
			const col = []

			for(let i = 0; i < name.length; i++) {
				col.push(<div className="col">
					<Link to={`/pokemon_stats/${id[i]}`} style={{textDecoration: 'none', color: '#000'}}>
						<div className="id-block"> 
							<div className="id">
								{id[i]} 
							</div>
						</div>
						<div className="block">
							<div className="name"> {name[i]} </div>
							<div className="sprite">
								<img src={image[i]} alt={image[i]}></img>
							</div>
						</div>
						</Link>
					</div>)
			}
			const row = []
			for(let i = 0, count = 0; i < 5; i++) {
				row.push(<div className="row" key={i}>
									{col[count++]}
									{col[count++]}
									{col[count++]}
									{col[count++]}
								</div>)
			}
			return row
		}

		return (
			<div>
				{layout(this.props.id, this.props.name, this.props.sprite)}
			</div>
		)
	}
}

export default PokemonCard