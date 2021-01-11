import React from 'react';

const TodoAdd = () => {
  const handleAdd = () => {
    console.log('test');
  };

  const handleChange = name => {
    console.log(name);
  };

  return (
    <div className="todo-add">
      <input
        type="text"
        className="todo-add-input"
        onChange={e => handleChange(e.target.value)}
      />
      <button className="todo-add-button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default TodoAdd;
