import {ADD_TODO, DELETE_TODO} from '../constants'

let nextId = 2
const initialState = [
  {
    id: 1,
    text: 'First Todo'
  }
]
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: nextId++,
          text: action.payload.text,
        }
      ]
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id)
    default:
      return state
  }
}

export default todoReducer
