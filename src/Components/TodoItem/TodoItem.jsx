import { useState } from 'react'
import { useTodo } from '../../context/TodoContext'

function TodoItem({ todo }) {
  const { DeleteTodo, UpdateTodo, MarkTodo } = useTodo()
  const [todoMessage, setTodoMessage] = useState(todo.title)
  const [isEditable, setIsEditable] = useState(false)

  const toggleEdit = () => {
    if (todo.mark) return
    if (isEditable && todoMessage.trim()) UpdateTodo(todo.id, todoMessage.trim())
    setIsEditable((previous) => !previous)
  }

  return (
    <div className={`group flex items-center gap-3 rounded-2xl border px-3 py-3 transition duration-300 sm:px-4 ${
      todo.mark
        ? 'border-emerald-400/20 bg-emerald-400/10'
        : 'border-white/10 bg-slate-950/30 hover:border-indigo-400/30 hover:bg-slate-900/60'
    }`}>
      <input
        type="checkbox"
        className="h-5 w-5 shrink-0 cursor-pointer accent-emerald-500"
        checked={todo.mark}
        onChange={() => MarkTodo(todo.id)}
      />
      <input
        type="text"
        className={`min-w-0 w-full rounded-lg border bg-transparent px-2 py-1 text-sm outline-none transition sm:text-base ${
          isEditable ? 'border-indigo-400/50 text-white ring-4 ring-indigo-500/10' : 'border-transparent'
        } ${todo.mark ? 'text-slate-500 line-through' : 'text-slate-200'}`}
        value={todoMessage}
        onChange={(event) => setTodoMessage(event.target.value)}
        readOnly={!isEditable}
      />
      <button
        className="inline-flex h-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 text-xs font-semibold text-slate-300 transition hover:border-indigo-400/40 hover:bg-indigo-400/10 hover:text-indigo-200 disabled:cursor-not-allowed disabled:opacity-30"
        onClick={toggleEdit}
        disabled={todo.mark}
      >
        {isEditable ? 'Save' : 'Edit'}
      </button>
      <button
        className="inline-flex h-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 text-xs font-semibold text-slate-300 transition hover:border-rose-400/40 hover:bg-rose-400/10 hover:text-rose-200"
        onClick={() => DeleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  )
}

export default TodoItem
