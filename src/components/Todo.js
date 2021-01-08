import React, { Component } from 'react';

import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <TodoAdd />
        <TodoList />
      </div>
    );
  }
}

export default Todo;
