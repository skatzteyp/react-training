import React, { Component } from 'react';

class TodoAdd extends Component {
  handleAdd() {
    console.log('add clicked');
  }

  handleChange(name) {
    console.log(name);
  }

  render() {
    return (
      <div className="todo-add">
        <input
          type="text"
          className="todo-add-input"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button className="todo-add-button" onClick={() => this.handleAdd()}>
          Add
        </button>
      </div>
    );
  }
}

export default TodoAdd;
