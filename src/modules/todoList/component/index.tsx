import React from 'react'
import '../todoList.css'
import InputTodo from './InputTodo'
import List from './List'

const TodoList = () => {

  return (
    <div>
      <h2>Todo List </h2>
      <InputTodo/>
      <List/>
    </div>
  )
}

export default TodoList