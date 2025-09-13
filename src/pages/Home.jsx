import React from 'react'
import { useEffect, useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

function Home() {
  const [todos, setTodos] = useState([])

  // creates new todo
  function addTodo(newTodo) {
    console.log(newTodo)
    setTodos((oldTodos) => [...oldTodos, newTodo])
  }

  // deletes todo
  function removeTodo(removedTodo) {
    setTodos(currentTodos => {
      let newTodos = currentTodos.filter(todo => todo !== removedTodo)
      return newTodos
    })
  }

  // toggles todo completion
  function toggleTodo(id, checked) {
    console.log(id, checked)
  }
  
  return (
    <div>
      <h1>To do</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
    </div>
  )
}

export default Home
