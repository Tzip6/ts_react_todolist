import React, {ChangeEvent, FormEvent} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../actions'

const InputTodo = () => {
  const [value, setValue] = React.useState('')
  const dispatch = useDispatch()

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(addTodo(value))
    setValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChangeInput}
        type="text"/>
      <button type="submit">등록</button>
    </form>
  )
}

export default InputTodo