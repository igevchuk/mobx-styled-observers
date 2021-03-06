import React from 'react'
import Button from './button.style'
import { observer } from 'mobx-react'

export const TextButton = observer(({ todo }) => (
  <Button onClick={todo.toggle}>{todo.textButtonText}</Button>
))

export const CountButton = observer(({ todo }) => (
  <Button onClick={todo.toggle}>{todo.countButtonText}</Button>
))
