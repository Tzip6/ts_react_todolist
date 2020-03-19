import {createStore} from 'redux'
import {combineReducers} from 'redux'
import todoReducer from './todoList/reducer'

const rootReducer = combineReducers({
  todos: todoReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

export default store