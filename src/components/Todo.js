import React, { Component } from 'react';

import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

class Todo extends Component {
  handleTodoAdd(name) {
    console.log(`Add ${name}`);
  }

  render() {
    return (
      <div className="todo">
        <TodoAdd onAdd={e => this.handleTodoAdd(e)} />
        <TodoList />
      </div>
    );
  }
}

export default Todo;
