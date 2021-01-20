import React from 'react';

import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import useTodo from '../hooks/useTodo';

const Todo = () => {
  const { createTodo, deleteTodo, editTodo } = useTodo();

  return (
    <div className="todo">
      <TodoAdd onAdd={createTodo} />
      <TodoList onDelete={deleteTodo} onEdit={editTodo} />
    </div>
  );
};

export default Todo;
