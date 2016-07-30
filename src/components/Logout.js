import React from 'react';

const Logout = (props) =>
    <div>
        <span>{props.name}</span>
        <span>uid: {props.uid}</span>
        <img src={props.photoUrl} alt="sal"/>
        <button onClick={props.logout}>Logout</button>
    </div>;


export default Logout;