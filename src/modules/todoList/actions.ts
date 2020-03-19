import {createAction} from 'typesafe-actions'
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './constants'

// create action functions
export const addTodo = createAction(ADD_TODO)<string>()
export const toggleTodo = createAction(TOGGLE_TODO)<number>()
export const removeTodo = createAction(REMOVE_TODO)<number>()
export const actions = {addTodo, toggleTodo, removeTodo}

