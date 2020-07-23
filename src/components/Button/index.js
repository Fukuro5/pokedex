import React from 'react'
import store from '../../redux/store.js'
import { pageIncrement, pageDecrement, isPageClickTrue } from '../../redux/actions/index.js'

class Button extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1
    }
  }

  render() {
    const disBtn = true ? this.state.page === 1 : false

    return (
      <div className="button-block">
        <button onClick={() => {
          store.dispatch(pageDecrement())
          store.dispatch(isPageClickTrue())
          this.setState({
            page: store.getState().page
          })}} type="button" className="btn btn-outline-success mr-lg-5" disabled={disBtn}>
          {'<'}
        </button> 
        <button type="button" className="button-page btn">
          {this.state.page}
        </button>
        <button onClick={() => {
          store.dispatch(pageIncrement())
          store.dispatch(isPageClickTrue())
          this.setState({
            page: store.getState().page
          })}} type="button" className="btn btn-outline-success ml-lg-5">
          {'>'}
        </button>
      </div>
    )
  }
}

export default Button