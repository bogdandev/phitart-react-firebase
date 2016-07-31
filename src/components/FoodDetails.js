import React from 'react';

import {Meals, Units} from './../api/constants';

class FoodDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      unit: Units.GRAMS,
      quantity: 0,
      type: Meals.BREAKFAST
    };
    this.changeUnit = this.changeUnit.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.addItem = this.addItem.bind(this);
    this.changeType = this.changeType.bind(this);
  }

  changeUnit() {
    this.setState({
      unit: this.refs.unitRef.selectedOptions[0].value
    });
  }

  changeQuantity() {
    this.setState({
      quantity: this.refs.quantityInput.value
    });
  }

  changeType() {
    this.setState({
      type: this.refs.typeRef.selectedOptions[0].value
    });
  }

  addItem() {
    this.props.addItem(
      this.props.item,
      {
        quantity: this.state.quantity,
        unit: this.state.unit,
        type: this.state.type
      }
    );
  }

  render() {
    return (
      <div className="detailed-view">
        <h2>Details - for 100g</h2>
        <h3>{this.props.item.name}</h3>
        <div>
          <input type="number" value={this.state.quantity} ref="quantityInput" onChange={this.changeQuantity}/>
          <select value={this.state.unit} name="unit"
                  onChange={this.changeUnit} ref="unitRef">
            <option value={Units.GRAMS}>Grams</option>
            <option value={Units.SERVINGS}>Servings</option>
          </select>

          <select name="mealType" value={this.state.type}
                  onChange={this.changeType} ref="typeRef">
            <option value={Meals.BREAKFAST}>Breakfast</option>
            <option value={Meals.LUNCH}>Lunch</option>
            <option value={Meals.DINNER}>Dinner</option>
            <option value={Meals.SNACK}>Snack</option>
          </select>

          <button onClick={this.addItem}>
            <i className="material-icons">add_circle</i>
          </button>
        </div>

        <ul>
          <li>Water: {this.props.item.water}</li>
          <li>Calories: {this.props.item.calories}</li>
          <li>Protein: {this.props.item.protein}</li>
        </ul>
      </div>
    );
  }
}

export default FoodDetails;