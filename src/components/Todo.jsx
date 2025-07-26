import React from 'react'

function Todo({ id, content, toggleTodo, removeTodo }) {
  return (
    <div>
      <input type="checkbox" onChange={(e) => toggleTodo(id, e.target.checked)} />
      <p>{content}</p>
      <button type="button" onClick={() => removeTodo(content)}> Remove </button>
    </div>
  )
}

export default Todo
