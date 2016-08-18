import React, {Component, PropTypes} from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Avatar from 'material-ui/Avatar';

import SearchAndAdd from './SearchAndAdd'

class Layout extends Component {
  constructor() {
    super()

    this.state = {
      searchedItems: [],
      detailedFood: null,
      valueSingle: 0
    }
  }

  handleChangeSingle (event, value)  {
    console.log(event, value);
    this.setState({
      valueSingle: value,
    });
  }


  render() {
    const {profile, logout} = this.props

    return (
      <div>
        <AppBar
            title="phitart"
            iconElementRight={<div><Avatar
              src={profile.photoUrl}
              size={30}/>
                <IconMenu
                  iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                  }
                  targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
                  anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}>
                  <MenuItem primaryText="Sign out" onClick={logout}/>
                </IconMenu>
              </div>}
          />

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
