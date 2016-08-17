import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 200,
  width: 300,
  textAlign: 'center',
  position: 'absolute',
  top: '30%',
  left: '38%'
};

const Login = ({authenticate}) => (
  <div className="bg-photo">
    <Paper style={style} zDepth={2}>
      <button onClick={authenticate}>Auth</button>
    </Paper>
  </div>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
}

export default Login;
