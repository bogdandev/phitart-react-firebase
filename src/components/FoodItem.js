import React from 'react';

const FoodItem = (props) =>
  <div>
    <i onClick={props.getDetails.bind(null, props.item.dbno)}
       style={{
         cursor: "pointer"
       }}
       className="material-icons">
      info_outline
    </i>
    {props.item.name}
  </div>;

export default FoodItem;