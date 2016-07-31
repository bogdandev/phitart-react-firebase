import React from 'react';

const Logout = (props) =>
  <div className="login">
    <img src={props.photoUrl} role="presentation"/>
    <span>{props.name}</span>
    <button onClick={props.logout}>Logout</button>
  </div>;


export default Logout;