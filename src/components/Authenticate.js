import React, {Component, PropTypes} from 'react'

import Login from './Login'
import Layout from './Layout'

class Authenticate extends Component {
  constructor() {
    super()
  }
  render() {
    let logged = this.props.profile
                  ? <Layout profile={this.props.profile} logout={this.props.logout}/>
                : <Login authenticate={this.props.authenticate}/>;
    return (
      <div>
        {logged}
      </div>
    )
  }
}

Authenticate.propTypes = {
  profile: PropTypes.object,
  authenticate: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
}

export default Authenticate
