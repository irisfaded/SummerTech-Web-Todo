import React, { useState } from 'react'

function TodoForm({ addTodo }) {
  const [content, setContent] = useState('')
  function onSubmit(e) {
    e.preventDefault()
    addTodo(content)
    setContent('')
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={content}
        placeholder="Enter new todo"
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit"> Submit </button>
    </form>
  )
}

export default TodoForm
