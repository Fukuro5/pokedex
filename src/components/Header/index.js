import React from 'react'
import store from '../../redux/store.js'
import { typeChange,
         isTypeClickTrue,
         inputChange,
         isInputClickTrue
        } from '../../redux/actions/index.js'
import './index.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: ''
    }

    this.typeChange = this.typeChange.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  typeChange() {
    this.setState({
      type: store.getState().type
    })
  }

  onInputChange(event) {
    store.dispatch(inputChange(event.target.value))
    store.dispatch(isInputClickTrue())
  }

  render() {
    const types = this.props.types
    store.subscribe(() => this.typeChange())
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Pokedex</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="dropdown mr-auto">
          <button 
            className="btn btn-secondary dropdown-toggle" 
            type="button" 
            id="dropdownMenuButton" 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false">
              Types
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {types.map(type => {
              return <li className="dropdown-item" key={type}>
                  <button className="btn" onClick={() => {
                    store.dispatch(typeChange(type))
                    store.dispatch(isTypeClickTrue())
                    }}>{type}</button>
                </li>
            })}
          </ul>
        </div>
        <div className="type">
          {this.state.type}
        </div>
        <form className="form-inline my-2 my-lg-0">
          <input 
            className="form-control mr-sm-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" 
            onChange={this.onInputChange}
          ></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    )
  }
}

export default Header