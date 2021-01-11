import React, { useState } from 'react';

const TodoAdd = () => {
  const [name, setName] = useState('');

  const handleAdd = () => {
    console.log(`Add ${name}`);
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
