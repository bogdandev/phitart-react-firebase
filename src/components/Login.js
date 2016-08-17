import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

const paperStyle = {
  width: 300,
  textAlign: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  padding: 10,
  transform: 'translate(-50%, -50%)'
};
const overflow = {
  overflow: 'hidden'
}

const Login = ({authenticate}) => (
  <div style={overflow}>
    <div className="bg-photo"></div>
    <Paper style={paperStyle} zDepth={5}>
      <i className="material-icons md-light no-account-icon">account_circle</i>
      <h1>Welcome Phitartist!</h1>
      <h2>You're lazy, this is why you are here. Use the lazy login: </h2>
      <img src="http://i.stack.imgur.com/XzoRm.png" onClick={authenticate} className="google-login-button" alt="Google login"/>
    </Paper>
  </div>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
}

export default Login;
