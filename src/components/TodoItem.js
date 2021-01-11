import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { todo } = this.props;

    return (
      <>
        <p>{todo}</p>
        <button className="todo-item-delete">Delete</button>
      </>
    );
  }
}

export default TodoItem;
