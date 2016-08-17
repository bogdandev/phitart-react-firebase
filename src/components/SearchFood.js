import React, {PropTypes} from 'react'

const SearchFood = ({searchFood}) =>
  <div>
    <input type="text" placeholder="Search food..." ref="foodInput"/>
    <button type="button" onClick={searchFood}>Search</button>
  </div>

SearchFood.propTypes = {
  searchFood: PropTypes.func.isRequired,
}

  export default SearchFood
