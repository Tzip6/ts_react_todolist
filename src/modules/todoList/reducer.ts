import {createReducer} from 'typesafe-actions'
import {TodoListType, TodoActionType} from './types'
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './constants'

// reducer
const initialState: TodoListType = [
  {id: 1, text: 'node.js 공부하기', done: true},
  {id: 2, text: 'npx create-react-app --template typescript', done: true},
  {id: 3, text: 'React TodoList 만들기', done: false},
]

const todoReducer = createReducer<TodoListType, TodoActionType>(
  initialState, {
    [ADD_TODO]: (state, {payload: text}) => {
      return ([
        ...state,
        {
          id: Math.max(...state.map(todo => todo.id)) + 1,
          text,
          done: false,
        },
      ])
    },
    [TOGGLE_TODO]: (state, {payload: id}) => {
      return (
        state.map(todo => todo.id === id ?
          {...todo, done: !todo.done} :
          todo)
      )
    },
    [REMOVE_TODO]: (state, {payload: id}) =>
      state.filter(todo => todo.id !== id),
  })

export default todoReducer
