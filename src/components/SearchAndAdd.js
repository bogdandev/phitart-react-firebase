import React, {Component} from 'react'

import * as DB from '../api/firebase'
import * as foods from '../api/foodDb'

import SearchFood from './SearchFood'
import SearchList from './SearchList'
import FoodDetails from './FoodDetails'

import {Nutrients, Units} from '../api/constants'

class SearchAndAdd extends Component {
  constructor() {
    super()

    this.state = {
      searchedItems: [],
      selectedFood: null,
    }

    this.searchFood = this.searchFood.bind(this)
    this.getDetails = this.getDetails.bind(this)
    this.addMeal = this.addMeal.bind(this)
  }

  searchFood(searchText) {
    foods.searchFood(searchText)
      .then(response => {
        let items = response.list.item.map(item => ({name: item.name, dbno: item.ndbno}))
        this.setState({searchedItems: items})
      })
      .catch(err => console.log(`Error: ${err}`))
  }

  getDetails(dbno) {
    foods.getDetails(dbno)
      .then(response => {
        let food = response.report.food
        let nutrients = food.nutrients
        let selectedItem = {
          name: food.name,
          water: nutrients[Nutrients.WATER].value,
          calories: nutrients[Nutrients.CALORIES].value,
          protein: nutrients[Nutrients.PROTEIN].value,
          fat: nutrients[Nutrients.FAT].value,
          carbs: nutrients[Nutrients.CARBS].value,
          sugars: nutrients[Nutrients.SUGARS].value,
          fiber: nutrients[Nutrients.FIBER].value,
        }
        this.setState({
          selectedFood: selectedItem,
        })
      })
      .catch(err => console.log(`Error: ${err}`))
  }

  addMeal(item, details) {
    const {quantity, unit, type} = details;
    let newItem
    if (unit === Units.GRAMS) {
      const percent = parseInt(quantity) / 100
      newItem = Object.assign(
        {},
        item,
        {
          quantity: quantity + ' ' + unit,
          water: item.water * percent,
          calories: item.calories * percent,
          protein: item.protein * percent,
          fat: item.fat * percent,
          carbs: item.carbs * percent,
          sugars: item.sugars * percent,
          fiber: item.fiber * percent
        }
      )
    }
    DB.addMeal(newItem, type)
  }

  render() {
    const items = this.state.searchedItems
    const selectedFood = this.state.selectedFood
    return (
      <div>
        <SearchFood searchFood={this.searchFood}/>
        {
          items.length > 0 &&
                <SearchList items={items} getDetails={this.getDetails}/>
        }
        {
          selectedFood &&
                <FoodDetails item={selectedFood} addItem={this.addMeal}/>
        }
      </div>
    )
  }
}

export default SearchAndAdd
