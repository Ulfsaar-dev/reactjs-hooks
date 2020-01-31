import React from 'react';

export default function Todo({ todo, index, completeTodo, removeTodo, changeTodo }) {
  return (
    <div className="todo">
      <div className={'checkbox'} onClick={() => completeTodo(index)}>
        {todo.isCompleted && (
          <span>&#x2714;</span>
        )}
      </div>
      <input type="text" value={todo.text} onChange={(e) => changeTodo(e, index)} />
      <div>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}