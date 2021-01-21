import React from 'react';

import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

const Todo = () => {
  return (
    <div className="todo">
      <TodoAdd />
      <TodoList />
    </div>
  );
};

export default Todo;
