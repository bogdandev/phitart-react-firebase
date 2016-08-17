import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as DB from './api/firebase'

import Authenticate from './components/Authenticate'
import {Nutrients, Units} from './api/constants'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      userProfile: null,
    };
    this.auth = this.auth.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentWillMount() {
    DB.loggedUser(user => {
      let profileData = user.providerData[0]
      let profile = Object.assign(
        {},
        {
          displayName: profileData.displayName,
          photoUrl: profileData.photoURL,
          uid: user.uid
        }
      )
      if (user !== null) {
        this.setState({
          userProfile: profile
        })
      }
    })
  }

  auth() {
    DB.authPromise().then(data => {
    }).catch(err => {
      console.log(err)
    });
  }
  logout() {
    DB.logout().then(we => {
      this.setState({
        userProfile: null
      });
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <Authenticate profile={this.state.userProfile}
                      authenticate={this.auth}
                      logout={this.logout}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
