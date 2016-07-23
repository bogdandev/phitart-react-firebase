import React from 'react';

const Item = (props) => (
    <li>
        <img src="http://placehold.it/50x50" alt={props.item.name}/>
        <span>
            {props.item.name} - {props.item.age}
        </span>
        <button onClick={props.delete.bind(null, props.item)}>X</button>
    </li>
);

export default Item;