import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {RootStateType} from '../../store'
import {toggleTodo, removeTodo} from '../actions'

const List = () => {
  const todos = useSelector((state: RootStateType) => state.todos)
  const dispatch = useDispatch()

  const onToggle = (id: number) => () => {
    dispatch(toggleTodo(id))
  }

  const onRemove = (id: number) => () => {
    dispatch(removeTodo(id))
  }
  return (
    <ul>{
      todos.map(todo =>
        <li key={todo.id} className='TodoItem'>
          <span onClick={onToggle(todo.id)}
                className={todo.done ? 'done' : ''}>{todo.text}</span>
          <span onClick={onRemove(todo.id)}
                className='remove'> (X) </span>
        </li>,
      )}</ul>
  )
}

export default List