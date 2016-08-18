import React, {Component, PropTypes} from 'react'

class SearchFood extends Component {
  constructor() {
    super()

    this.state = {
      inputText: ''
    }

    this.inputChanged = this.inputChanged.bind(this)
    this.searchFood = this.searchFood.bind(this)
  }

  searchFood() {
    this.props.searchFood(this.state.inputText)
  }

  inputChanged(e) {
    e.preventDefault()
    this.setState({inputText: this.refs.foodInput.value})
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search food..."
            ref="foodInput" value={this.state.inputText} onChange={this.inputChanged}/>
        <button type="button" onClick={this.searchFood}>Search</button>
      </div>
    )
  }
}

SearchFood.propTypes = {
  searchFood: PropTypes.func.isRequired,
}

export default SearchFood
