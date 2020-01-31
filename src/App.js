import React, { useState } from "react";
import Todo from "./Todo";
import CompletedTodo from './CompletedTodo';
import TodoForm from './TodoForm';
import "./App.css";
let completedList = [];
function App() {
  
  const [todos, setTodos] = useState([
    {
      text: "Todo1",
      isCompleted: false
    },
    {
      text: "Todo2",
      isCompleted: false
    },
    {
      text: "Todo3",
      isCompleted: false
    }
  ]);

  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    newTodos.isCompleted = false;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const removeCompletedTodo = compIndex => {
    const newCompletedTodos = [...completedList];
    completedList.splice(compIndex,1);
    newCompletedTodos.splice(compIndex, 1);
    setCompletedTodos(newCompletedTodos);
  };

  const changeTodo = (e, index) => {
    const newTodos = [...todos];
    if (!newTodos[index].isCompleted) {
      newTodos[index].text = e.target.value;
      setTodos(newTodos);
    }
  }

  function completeTodo(index) {
    const temporaryTodos = [...todos];
    completedList = completedList.concat(temporaryTodos[index]);
    
    temporaryTodos.splice(index, 1);
    setTodos(temporaryTodos);
    setStatus(false);
    setCompletedTodos(completedList);
    
  }

  const [status, setStatus] = useState(true);
  
  function handleToggle() {
    setStatus(!status);
    if (status)
      setCompletedTodos(completedList);
    else
      setCompletedTodos([]);
  }
  

  return (
    <div className="app">
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        { 
          todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              changeTodo={changeTodo}
            />
        ))}
        <button value={status} onClick={handleToggle}>{ status ? 'Show Completed' : 'Hide Completed' }</button>
        {completedTodos.map((todo, compIndex) => (
          <CompletedTodo
            key={compIndex}
            compIndex={compIndex}
            todo={todo}
            removeCompletedTodo={removeCompletedTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
