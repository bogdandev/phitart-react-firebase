import React from 'react'
import {Link} from 'react-router'
import {push} from 'redux-router'

const TodoList = (props) => {
  return (
    <div>
      <h3>MY TODO LIST</h3>
      <Link to={{pathname: '/', display: '/'}}>
        FIRST LINK
      </Link>
      <br/>
      <Link to={{pathname: '/parent', display: '/parent', query: {bar: 'caca'}}}
        onClick={(e) => {
          e.preventDefault()
          props.dispatch(push({pathname: '/parent'}))
        }}>
        PARENT LINK
      </Link>
      <br/>
      <Link to={{pathname: '/child', display: '/childxxx'}}
          onClick={(e) => {
            e.preventDefault()
            props.dispatch(push({pathname: '/child'}))
          }}>CHILD LINK</Link>
      {props.children}
    </div>
  )
}

export default TodoList
