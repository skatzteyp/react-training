import React, { Component } from 'react';

import TodoItem from './TodoItem';

const todoItems = [
  'Wake up',
  'Eat Breakfast',
  'Take a Bath',
  'Go to School',
  'Learn Something',
  'Go Home',
  'Go toSleep'
];

class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        {todoItems.map(item => (
          <li key={item} className="todo-list-item">
            <TodoItem />
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
