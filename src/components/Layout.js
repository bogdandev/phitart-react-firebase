import React, {Component, PropTypes} from 'react'

import SearchAndAdd from './SearchAndAdd'

class Layout extends Component {
  constructor() {
    super()

    this.state = {
      searchedItems: [],
      detailedFood: null,
    }
  }
  render() {
    let {profile, logout} = this.props
    return (
      <div>
        <img src={profile.photoUrl} role="presentation"/>
        <span>{profile.displayName}</span>
        <button onClick={logout}>Logout</button>
        <SearchAndAdd/>
      </div>
    )
  }
}

Layout.propTypes = {
  profile: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
}

export default Layout;
