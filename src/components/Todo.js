import React from 'react';

import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

const Todo = () => (
  <div className="todo">
    <TodoAdd />
    <TodoList />
  </div>
);

export default Todo;
