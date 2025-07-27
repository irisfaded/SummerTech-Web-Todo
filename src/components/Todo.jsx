import React from 'react'

function Todo({ id, content, toggleTodo, removeTodo }) {
  return (
    <div className='row to-do'>

      <div className='row'>
      <input type="checkbox" onChange={(e) => toggleTodo(id, e.target.checked)} />
      <p className='content'>{content}</p>
      </div>
      <button type="button" onClick={() => removeTodo(content)} className='red-btn'> X </button>
    </div>
  )
}

export default Todo
