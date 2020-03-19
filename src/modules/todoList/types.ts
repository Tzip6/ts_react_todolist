import {ActionType} from 'typesafe-actions'
import {actions} from './actions'

export type TodoType = {
  id: number,
  text: string,
  done: boolean
}

export type TodoListType = TodoType[]

export type TodoActionType = ActionType<typeof actions>
