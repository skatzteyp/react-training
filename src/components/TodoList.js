import React from 'react';

import TodoItem from './TodoItem';

const TodoList = () => (
  <ul className="todo-list">
    <li className="todo-list-item">
      <TodoItem />
    </li>
    <li className="todo-list-item">
      <TodoItem />
    </li>
    <li className="todo-list-item">
      <TodoItem />
    </li>
    <li className="todo-list-item">
      <TodoItem />
    </li>
    <li className="todo-list-item">
      <TodoItem />
    </li>
  </ul>
);

export default TodoList;
