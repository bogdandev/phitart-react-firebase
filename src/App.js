import React, {Component} from 'react';
import * as DB from './api/firebase';
import * as foods from './api/foodDb';

import Login from './components/Login';
import Logout from './components/Logout';
import Item from './components/Item';
import FoodItem from './components/FoodItem';
import FoodDetails from './components/FoodDetails';
import {Nutrients} from './api/constants';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      searchedItems: [],
      detailedFood: null,
      userProfile: null
    };
    this.addPeople = this.addPeople.bind(this);
    this.getValues = this.getValues.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.auth = this.auth.bind(this);
    this.logout = this.logout.bind(this);
    this.addMeal = this.addMeal.bind(this);
    this.searchFood = this.searchFood.bind(this);
    this.getDetails = this.getDetails.bind(this);
  }

  //lifecycle hooks
  componentWillMount() {
    DB.loggedUser(user => {
      let profile = Object.assign(
        {},
        {
          displayName: user.displayName,
          photoUrl: user.photoURL
        }
      );
      if (user !== null) {
        this.setState({
          userProfile: profile
        });
      }
      this.setState({
        userProfile: profile
      });
    });
    DB.getData().then(snapshot => {
      this.getValues(snapshot);
    });
  }

  componentDidMount() {
    DB.subscribeToUpdates(this.getValues);
  }

  componentWillUnmount() {
    DB.unsubscribeFromUpdates();
  }

  getValues(snapshot) {
    let objList = snapshot.val();
    let newList = [];
    Object.keys(objList).map(key => {
      newList.push(
        Object.assign(
          {},
          objList[key],
          {
            id: key
          }
        )
      )
    });
    this.setState({list: newList});
  }

  addPeople() {
    let newList = [].concat(this.state.list);
    let obj = {
      name: this.refs.nameInput.value,
      age: Math.floor(Math.random() * 100 + 1)
    };
    newList.push(obj);
    this.setState({
      list: newList
    }, () => {
      DB.addItem(obj);
    });
  }

  deleteItem(item) {
    DB.deleteItem(item);
    let newList = this.state.list.filter(listItem => listItem.id !== item.id);
    this.setState({
      list: newList
    });
  }

  addMeal() {
    DB.addMeal();
  }

  auth() {
    DB.authPromise().then(data => {
      var profile = Object.assign(
        {},
        {
          displayName: data.user.displayName,
          photoUrl: data.user.photoURL,
          uid: data.user.uid
        }
      );
      this.setState({
        userProfile: profile
      });
    }).catch(err => {
      console.log(err)
    });
  }

  logout() {
    DB.logout().then(we => {
      this.setState({
        userProfile: null
      });
    });
  }

  searchFood() {
    foods.searchFood(this.refs.foodInput.value)
      .then(response => {
        let items = response.list.item.map(item => {
          return {
            name: item.name,
            dbno: item.ndbno
          }
        });
        this.setState({
          searchedItems: items
        });
      });
  }

  getDetails(dbno) {
    foods.getDetails(dbno)
      .then(response => {
        let food = response.report.food;
        let nutrients = food.nutrients;
        let selectedItem = {
          name: food.name,
          water: nutrients[Nutrients.WATER].value,
          calories: nutrients[Nutrients.CALORIES].value,
          protein: nutrients[Nutrients.PROTEIN].value,
          fat: nutrients[Nutrients.FAT].value,
          carbs: nutrients[Nutrients.CARBS].value,
          sugars: nutrients[Nutrients.SUGARS].value,
          fiber: nutrients[Nutrients.FIBER].value
        };
        this.setState({
          detailedFood: selectedItem
        })
      });
  }

  render() {
    let authComp = this.state.userProfile ?
      <Logout name={this.state.userProfile.displayName}
              photoUrl={this.state.userProfile.photoUrl}
              uid={this.state.userProfile.uid}
              logout={this.logout}/> :
      <Login auth={this.auth}/>;
    let renderedList = this.state.list && this.state.list.map((item, index) => {
        return (
          <Item key={index} item={item} delete={this.deleteItem}/>
        );
      });

    let foodItems = this.state.searchedItems.map((item, index) => {
      return (
        <FoodItem item={item} key={index}
                  getDetails={this.getDetails}/>
      );
    });

    return (
      <div>
        {authComp}
        <button type="button" onClick={this.searchFood}>Search food</button>
        <button type="button" onClick={this.getDetails}>Get details</button>
        <div className="flex-container">
          <div className="search-field">
            <input type="text" placeholder="Search food..." ref="foodInput"/>
            <div>Search results</div>
            {foodItems}
          </div>
          {this.state.detailedFood && <FoodDetails item={this.state.detailedFood}/>}
        </div>
      </div>
    );
  }
}

export default App;
