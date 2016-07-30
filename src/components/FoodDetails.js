import React from 'react';

const FoodDetails = (props) =>
  <div className="detailed-view">
    <h2>Details - for 100g</h2>
    <h3>{props.item.name}</h3>
    <ul>
      <li>Water: {props.item.water}</li>
      <li>Calories: {props.item.calories}</li>
      <li>Protein: {props.item.protein}</li>
    </ul>
  </div>;

export default FoodDetails;