import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

const Todo = () => {
  const [items, setItems] = useState([]);

  async function getTodos() {
    let todos = await axios.get('http://localhost:4000/todos');

    setItems(todos.data);
  }

  useEffect(() => {
    getTodos();
  }, []);

  const handleTodoAdd = async name => {
    await axios.post('http://localhost:4000/todos', {
      title: name,
      description: name
    });

    getTodos();
  };

  const handleDelete = todo => {
    console.log(todo);

    axios({
      method: 'DELETE',
      url: `http://localhost:4000/todos/${todo.id}`
    });
  };

  const handleEdit = todo => {
    console.log(todo);
  }

  return (
    <div className="todo">
      <TodoAdd onAdd={handleTodoAdd} />
      <TodoList onDelete={handleDelete} items={items} onEdit={handleEdit} />
    </div>
  );
};

export default Todo;
