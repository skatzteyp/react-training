import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

import { addTodo } from '../redux/todo';

const TodoAdd = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleAdd = () => {
    dispatch(addTodo({ title: name, description: name }));
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
