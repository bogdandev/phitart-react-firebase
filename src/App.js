import React, {Component} from 'react'

import Login from './components/Login'


import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import {connect, Provider} from 'react-redux'
import {Route} from 'react-router'
import {reduxReactRouter, routerStateReducer, ReduxRouter, push} from 'redux-router'
import {createHistory} from 'history'

import rootReducer from './reducers/rootReducer'
import todoReducer from './reducers/todoReducer'

// import Dummy1 from './components/Dummy1'
// import Dummy2 from './components/Dummy2'
// import Dummy3 from './components/Dummy3'

import todoContainer from './containers/todoContainer'

// const routes = (
//   <Route path="/" component={Login}>
//     <Route path="parent" component={Dummy1}>
//       <Route path="child" component={Dummy2}/>
//       <Route path="child/:id" component={Dummy3}/>
//     </Route>
//   </Route>
// )

let store = createStore(
  rootReducer
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <todoContainer/>
      </Provider>
    )
  }
}

export default App
