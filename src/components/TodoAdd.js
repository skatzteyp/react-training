import React, { useState } from 'react';

import useTodo from '../hooks/useTodo';

const TodoAdd = () => {
  const { createTodo } = useTodo();
  const [name, setName] = useState('');

  const handleAdd = () => {
    createTodo(name);
  };

  const handleChange = name => {
    setName(name);
  };

  return (
    <div className="todo-add">
      <input
        type="text"
        className="todo-add-input"
        value={name}
        onChange={e => handleChange(e.target.value)}
      />
      <button className="todo-add-button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default TodoAdd;
