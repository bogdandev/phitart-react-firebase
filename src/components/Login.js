import React, {PropTypes} from 'react';

const Login = ({authenticate}) => (
  <div>
    <button onClick={authenticate}>Auth</button>
  </div>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
}

export default Login;
