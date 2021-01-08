import React, { Component } from 'react';

class TodoAdd extends Component {
  render() {
    return (
      <div className="todo-add">
        <input type="text" className="todo-add-input" />
        <button className="todo-add-button">Add</button>
      </div>
    );
  }
}

export default TodoAdd;
