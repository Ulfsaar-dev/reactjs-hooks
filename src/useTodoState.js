import { useState } from 'react';

export default (initialValue) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
      addTodo: (todoText) => {
      setTodos([...todos, todoText]);
    },
    deleteTodo: (todoIndex) => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);
      setTodos(newTodos);
    },
    changeTodo: (e, index) => {
      const newTodos = [...todos];
      if (!newTodos[index].isCompleted) {
        newTodos[index].content = e.target.value;
        setTodos(newTodos);
      }
    }
  }
};