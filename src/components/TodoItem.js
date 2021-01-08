import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <>
        <p>Todo 1</p>
        <button className="todo-item-delete">Delete</button>
      </>
    );
  }
}

export default TodoItem;
