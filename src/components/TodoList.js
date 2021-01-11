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
  handleTodoDelete(name) {
    console.log(`Delete ${name}`);
  }

  render() {
    return (
      <ul className="todo-list">
        {todoItems.map(item => (
          <li key={item} className="todo-list-item">
            <TodoItem todo={item} onDelete={e => this.handleTodoDelete(e)} />
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
