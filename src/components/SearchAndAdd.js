import React, {Component} from 'react'

import SearchFood from './SearchFood'
import SearchList from './SearchList'

class SearchAndAdd extends Component {
  constructor() {
    super()

    this.state = {
      searchedItems: [],
      detailedFood: null,
    }
  }

  render() {
    let items = this.state.searchedItems
    return (
      <div>
        <SearchFood searchFood={() => console.log('i need to search')}/>
        {
          items.length > 0 &&
                <SearchList items={this.state.searchedItems}/>
        }
      </div>
    )
  }
}

export default SearchAndAdd
