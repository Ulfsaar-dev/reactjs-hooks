import React from 'react';

export default function CompletedTodo({ todo, compIndex, removeCompletedTodo }) {
  return (
    <div className="todo">
      <input type="text" value={todo.text} />
      <div>
        <button onClick={() => removeCompletedTodo(compIndex)}>x</button>
      </div>
    </div>
  );
}