import React from 'react';

import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import useTodo from '../hooks/useTodo';

const Todo = () => {
  const { todos, createTodo, deleteTodo, editTodo } = useTodo();

  return (
    <div className="todo">
      <TodoAdd onAdd={createTodo} />
      <TodoList items={todos} onDelete={deleteTodo} onEdit={editTodo} />
    </div>
  );
};

export default Todo;
