import { memo, useContext, useMemo } from 'react'
import { todoContext } from './context/todoContext'

function TodoItem() {
  const { filteredTodos, todos, setTodos } = useContext(todoContext)

  const tasks = useMemo(
    () =>
      filteredTodos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <label className="todo-item__label">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                setTodos((currentTodos) =>
                  currentTodos.map((currentTodo) =>
                    currentTodo.id === todo.id
                      ? { ...currentTodo, completed: !currentTodo.completed }
                      : currentTodo,
                  ),
                )
              }
            />
            <span className={todo.completed ? 'todo-item__text done' : 'todo-item__text'}>
              {todo.text}
            </span>
          </label>
          <button
            type="button"
            className="todo-item__delete"
            onClick={() =>
              setTodos((currentTodos) =>
                currentTodos.filter((currentTodo) => currentTodo.id !== todo.id),
              )
            }
          >
            Remover
          </button>
        </li>
      )),
    [filteredTodos, setTodos],
  )

  return (
    <section className="todo-list">
      <div className="todo-list__header">
        <h2>Minhas tarefas</h2>
        <span>{todos.length} itens</span>
      </div>
      {tasks.length > 0 ? (
        <ul className="todo-list__items">{tasks}</ul>
      ) : (
        <p className="todo-list__empty">
          Nenhuma tarefa encontrada. Adicione uma tarefa para começar!
        </p>
      )}
    </section>
  )
}

export default memo(TodoItem)
