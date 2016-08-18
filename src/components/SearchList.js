import React, {PropTypes} from 'react'

import FoodItem from './FoodItem'

const SearchList = ({items, getDetails}) =>
  <div className="search-field">
    <span>Search Results</span>
    {
      items.map((item, index) => (<FoodItem item={item} getDetails={getDetails} key={index}/>))
    }
  </div>

SearchList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  getDetails: PropTypes.func.isRequired,
}

export default SearchList
