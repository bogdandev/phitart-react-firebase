import React, {PropTypes} from 'react'

const FoodItem = ({item, getDetails}) =>
  <div>
    <i onClick={() => getDetails(item.dbno)}
       style={{
         cursor: "pointer"
       }}
       className="material-icons">
      info_outline
    </i>
    {item.dbno} -- {item.name}
  </div>

FoodItem.propTypes = {
  item: PropTypes.object.isRequired,
  getDetails: PropTypes.func,
}

export default FoodItem
