import React, {PropTypes} from 'react'

import FoodItem from './FoodItem'

const SearchList = ({items, selectFood}) =>
  <div className="search-field">
    <span>Search Results</span>
    {
      items.map((item, index) => {
        return (
          <FoodItem item={item} key={index}/>
        )
      })
    }
  </div>

SearchList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  selectFood: PropTypes.func,
}
