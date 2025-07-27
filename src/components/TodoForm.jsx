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
        className='form-input'
        placeholder="Get things done. Enter your task for today"
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="submit" type="submit"> Submit </button>
    </form>
  )
}

export default TodoForm
