import React from 'react'
import Todo from './Todo'

function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <div>
      {todos.length == 0 && 'You have nothing to do today!'}
      {todos.map((todo, i) => {
        return (
          <Todo key={i} id={i} content={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        )
      })}
    </div>
  )
}

export default TodoList
