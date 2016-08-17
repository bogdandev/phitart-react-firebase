import React, {PropTypes} from 'react'

const FoodItem = ({item}) =>
  <div>
    <i onClick={() => console.log('getting details')}
       style={{
         cursor: "pointer"
       }}
       className="material-icons">
      info_outline
    </i>
    {item.name}
  </div>

FoodItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FoodItem
