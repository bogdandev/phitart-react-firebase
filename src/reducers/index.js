import {combineReducers} from 'redux'
import todoReducer from './todoReducer'
import {routerStateReducer} from 'redux-router'

export default combineReducers({
  todos: todoReducer,
  router: routerStateReducer
})
