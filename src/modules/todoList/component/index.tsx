import React from 'react'
import '../todoList.css'

type TodoType = {
  id: number,
  text: string,
  done: boolean
}

type TodoListType = TodoType[]

const initialState = [
  {id: 1, text: 'node.js 공부하기', done: true},
  {id: 2, text: 'npx create-react-app --template typescript', done: true},
  {id: 3, text: 'React TodoList 만들기', done: false},
]

const TodoList = () => {
  const [todos, setTodos] = React.useState(initialState)

  const onToggle = (id: number) => () => {
    setTodos(
      todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo),
    )
  }
  const onRemove = (id: number) => () => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <h2>Todo List ({todos.length}개)</h2>
      <ul>{todos.map(todo =>
        <li key={todo.id} className='TodoItem'>
          <span onClick={onToggle(todo.id)}
                className={todo.done ? 'done' : ''}>{todo.text}</span>
          <span onClick={onRemove(todo.id)}
                className='remove'> (X) </span>
        </li>,
      )}</ul>
    </div>
  )
}

export default TodoList