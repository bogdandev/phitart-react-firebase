import {connect} from 'react-redux'
import {addTodo, deleteTodo} from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = state => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => { dispatch(addTodo(text)) },
    deleteTodo: id => { dispatch(deleteTodo(id)) },
    dispatch: dispatch, //TODO: look into removing this
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
