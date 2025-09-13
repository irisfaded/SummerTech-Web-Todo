import React, { useEffect } from 'react'
import Todo from './Todo'

function TodoList({ todos, toggleTodo, removeTodo }) {

  useEffect(()=>{
  if (todos.length == 0) {
    document.getElementById("status").style.display = "flex";
    document.getElementById("status").style.height = "40vh";
    document.getElementById("status").style.justifyContent = "center";
    document.getElementById("status").style.alignItems = "center";
    document.getElementById("status").style.color = "gray";
  } 
  else{
    document.getElementById("status").style.display = "";
    document.getElementById("status").style.color = "black";
  }
}
,[todos]
  );

  return (
    <div id='status'>
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
