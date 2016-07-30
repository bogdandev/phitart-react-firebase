import React from 'react';

const FoodItem = (props) =>
  <div>
    {props.item.name}
    <i onClick={props.getDetails.bind(null, props.item.dbno)}
       style={{
         cursor: "pointer"
       }}
       className="material-icons">
      info_outline
    </i>
  </div>;

export default FoodItem;