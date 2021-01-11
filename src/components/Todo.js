import React from 'react';

import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

const Todo = () => {
  const handleTodoAdd = name => {
    console.log(`Add ${name}`);
  };

  return (
    <div className="todo">
      <TodoAdd onAdd={handleTodoAdd} />
      <TodoList />
    </div>
  );
};

export default Todo;
