import React, {ChangeEvent, FormEvent} from 'react'
import '../todoList.css'
import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../../store'

type TodoType = {
  id: number,
  text: string,
  done: boolean
}

type TodoListType = TodoType[]

// action type constants
const ADD_TODO = 'todo/ADD_TODO' as const
const TOGGLE_TODO = 'todo/TOGGLE_TODO' as const
const REMOVE_TODO = 'todo/REMOVE_TODO' as const

// create action functions
const addTodo = (text: string) => ({type: ADD_TODO, payload: text})
const toggleTodo = (id: number) => ({type: TOGGLE_TODO, payload: id})
const removeTodo = (id: number) => ({type: REMOVE_TODO, payload: id})
type TodoActionType =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>

// reducer
const initialState: TodoListType = [
  {id: 1, text: 'node.js 공부하기', done: true},
  {id: 2, text: 'npx create-react-app --template typescript', done: true},
  {id: 3, text: 'React TodoList 만들기', done: false},
]

export const todoReducer = (
  state: TodoListType = initialState, action: TodoActionType) => {
  switch (action.type) {
    case 'todo/ADD_TODO':
      return ([
        ...state,
        {
          id: Math.max(...state.map(todo => todo.id)) + 1,
          text: action.payload,
          done: false,
        },
      ])
    case 'todo/TOGGLE_TODO':
      return (
        state.map(todo => todo.id === action.payload ?
          {...todo, done: !todo.done} :
          todo)
      )
    case 'todo/REMOVE_TODO':
      return (
        state.filter(todo => todo.id !== action.payload)
      )
    default:
      return state
  }
}

const TodoList = () => {
  const todos = useSelector((state: RootStateType) => state.todos)
  const dispatch = useDispatch()
  const [value, setValue] = React.useState('')

  const onChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onSubmit = (e:FormEvent) => {
    e.preventDefault()
    dispatch(addTodo(value))
    setValue('')
  }

  const onToggle = (id: number) => () => {
    dispatch(toggleTodo(id))
  }

  const onRemove = (id: number) => () => {
    dispatch(removeTodo(id))
  }

  return (
    <div>
      <h2>Todo List </h2>
      <form onSubmit={onSubmit}>
        <input
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={onChangeInput}
          type="text"/>
        <button type="submit">등록</button>
      </form>

      <ul>{
        todos.map(todo =>
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