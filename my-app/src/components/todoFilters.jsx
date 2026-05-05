import { memo, useContext, useMemo } from 'react'
import { todoContext } from './context/todoContext'

function TodoFilters() {
  const { todos, filter, setFilter } = useContext(todoContext)

  // Contagem de tarefas concluídas e pendentes.
  const counts = useMemo(
    () => ({
      all: todos.length,
      completed: todos.filter((todo) => todo.completed).length,
      pending: todos.filter((todo) => !todo.completed).length,
    }),
    [todos],
  )

  return (
    <section className="todo-filters">
      <div className="todo-filters__summary">
        <span>{counts.all} tarefas</span>
        <span>{counts.completed} concluídas</span>
        <span>{counts.pending} pendentes</span>
      </div>
      <div className="todo-filters__buttons">
        <button
          type="button"
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          Todas
        </button>
        <button
          type="button"
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Concluídas
        </button>
        <button
          type="button"
          className={filter === 'pending' ? 'active' : ''}
          onClick={() => setFilter('pending')}
        >
          Pendentes
        </button>
      </div>
    </section>
  )
}

export default memo(TodoFilters)
