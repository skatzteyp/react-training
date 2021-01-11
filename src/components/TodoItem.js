import React, { Component } from 'react';

class TodoItem extends Component {
  handleDelete(name) {
    const { onDelete } = this.props;

    onDelete(name);
  }

  render() {
    const { todo, onDelete } = this.props;

    return (
      <>
        <p>{todo}</p>
        <button className="todo-item-delete" onClick={() => onDelete(todo)}>
          Delete
        </button>
      </>
    );
  }
}

export default TodoItem;
