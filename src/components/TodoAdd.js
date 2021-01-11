import React, { Component } from 'react';

class TodoAdd extends Component {
  state = {
    name: ''
  };

  handleAdd() {
    const { name } = this.state;
    const { onAdd } = this.props;

    onAdd(name);
  }

  handleChange(name) {
    this.setState({ name });
  }

  render() {
    const { name } = this.state;

    return (
      <div className="todo-add">
        <input
          type="text"
          className="todo-add-input"
          value={name}
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
