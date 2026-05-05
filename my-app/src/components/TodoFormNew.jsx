import { memo, useContext, useState } from 'react'
import { todoContext } from './context/todoContext'

function TodoForm() {
  const { setTodos } = useContext(todoContext)
  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedText = text.trim()
    if (!trimmedText) return

    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: Date.now(),
        text: trimmedText,
        completed: false,
      },
    ])
    setText('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label className="todo-form__label" htmlFor="todo-input">
        Nova tarefa
      </label>
      <div className="todo-form__row">
        <input
          id="todo-input"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Digite sua tarefa"
          className="todo-form__input"
        />
        <button type="submit" className="todo-form__button">
          Adicionar
        </button>
      </div>
    </form>
  )
}

export default memo(TodoForm)
