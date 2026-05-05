import { todoContext } from './todoContext'

export function TodoProvider({ value, children }) {
  return <todoContext.Provider value={value}>{children}</todoContext.Provider>
}

