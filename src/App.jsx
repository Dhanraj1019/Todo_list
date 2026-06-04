import { useEffect, useState } from 'react'
import { TodoContextProvider } from './context/TodoContext'
import TodoForm from './Components/TodoForm/TodoForm'
import TodoItem from './Components/TodoItem/TodoItem'

function App() {
  const [todo, settodo] = useState([])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todo'))
    if (todos?.length > 0) settodo(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])

  const AddTodo = (title) => {
    settodo((previous) => [...previous, { id: Date.now(), title, mark: false }])
  }

  const DeleteTodo = (id) => {
    settodo((previous) => previous.filter((item) => item.id !== id))
  }

  const UpdateTodo = (id, title) => {
    settodo((previous) => previous.map((item) => item.id === id ? { ...item, title } : item))
  }

  const MarkTodo = (id) => {
    settodo((previous) => previous.map((item) => item.id === id ? { ...item, mark: !item.mark } : item))
  }

  const completed = todo.filter((item) => item.mark).length

  return (
    <TodoContextProvider value={{ todo, DeleteTodo, UpdateTodo, MarkTodo, AddTodo }}>
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-4 py-10 text-white sm:px-6 sm:py-16">
        <div className="mx-auto w-full max-w-2xl">
          <header className="mb-8 text-center">
            <span className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">
              Daily Planner
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Manage your todos</h1>
            <p className="mt-3 text-sm text-slate-400 sm:text-base">Stay focused and make every task count.</p>
          </header>

          <section className="rounded-3xl border border-white/10 bg-white/[0.07] p-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-7">
            <div className="mb-6">
              <TodoForm />
            </div>

            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4 text-sm">
              <p className="font-medium text-slate-200">{todo.length} {todo.length === 1 ? 'task' : 'tasks'}</p>
              <p className="text-slate-400">{completed} completed</p>
            </div>

            <div className="space-y-3">
              {todo.length > 0 ? todo.map((item) => (
                <TodoItem key={item.id} todo={item} />
              )) : (
                <div className="rounded-2xl border border-dashed border-white/15 px-5 py-12 text-center">
                  <p className="font-semibold text-slate-300">Your task list is empty</p>
                  <p className="mt-1 text-sm text-slate-500">Add your first task above to get started.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </TodoContextProvider>
  )
}

export default App
