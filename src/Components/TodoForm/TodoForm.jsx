import { useState } from 'react'
import { useTodo } from '../../context/TodoContext'

function TodoForm() {
  const [value, setValue] = useState('')
  const { AddTodo } = useTodo()

  const add = (event) => {
    event.preventDefault()
    if (!value.trim()) return

    AddTodo(value.trim())
    setValue('')
  }

  return (
    <form onSubmit={add} className="flex flex-col gap-3 sm:flex-row">
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        type="text"
        placeholder="What needs to be done?"
        className="min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400/60 focus:ring-4 focus:ring-indigo-500/10"
      />
      <button type="submit" className="shrink-0 cursor-pointer rounded-xl bg-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-950/40 transition hover:bg-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 active:scale-[0.98]">
        Add task
      </button>
    </form>
  )
}

export default TodoForm
