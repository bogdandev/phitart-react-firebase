import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, compose} from 'redux'

import appReducer from './reducers'
import TodoListContainer from './containers/TodoListContainer'

import Comp3 from './testRouting/Comp3'
import Comp2 from './testRouting/Comp2'

let store = compose(
  reduxReactRouter({createHistory})
)(createStore)(appReducer)

import {ReduxRouter, reduxReactRouter, routerStateReducer, push} from 'redux-router'
import {Route, Link} from 'react-router'
import {createHistory} from 'history'

render(
  <Provider store={store}>
    <ReduxRouter>
      <Route path="/" component={TodoListContainer}>
        <Route path="parent" component={Comp2}/>
        <Route path="child" component={Comp3}/>
      </Route>
    </ReduxRouter>
  </Provider>,
  document.getElementById('root')
);
