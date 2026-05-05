import { useMemo, useState } from 'react'
import './AppStyles.css'
import TodoFilters from './components/todoFilters'
import TodoForm from './components/TodoFormNew'
import TodoItem from './components/TodoItemNew'
import { TodoProvider } from './components/context/todoProvider'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  // Estado principal de tarefas � persistido em localStorage.
  const [todos, setTodos] = useLocalStorage('todo-list', [])
  const [filter, setFilter] = useState('all')

  // Memoiza a lista filtrada para evitar recomputa��o desnecess�ria.
  const filteredTodos = useMemo(() => {
    if (filter === 'completed') return todos.filter((todo) => todo.completed)
    if (filter === 'pending') return todos.filter((todo) => !todo.completed)
    return todos
  }, [todos, filter])

  return (
    <div className="App">
      <section className="todo-app">
        <header className="todo-app__header">
          <p className="todo-app__subtitle">Organize suas tarefas de forma simples</p>
          <h1>Lista de tarefas</h1>
        </header>

        <TodoProvider
          value={{ todos, setTodos, filter, setFilter, filteredTodos }}
        >
          <TodoForm />
          <TodoFilters />
          <TodoItem />
        </TodoProvider>
      </section>
    </div>
  )
}

export default App
