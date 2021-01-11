import React, { Component } from 'react';

class TodoItem extends Component {
  handleDelete(name) {
    console.log(`delete ${name}`);
  }

  render() {
    const { todo } = this.props;

    return (
      <>
        <p>{todo}</p>
        <button
          className="todo-item-delete"
          onClick={() => this.handleDelete(todo)}
        >
          Delete
        </button>
      </>
    );
  }
}

export default TodoItem;
