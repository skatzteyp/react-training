import React, { Component } from 'react';

import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    return (
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
  }
}

export default TodoList;
