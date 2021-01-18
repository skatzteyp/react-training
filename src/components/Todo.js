import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

const Todo = () => {
  const [items, setItems] = useState([]);

  async function getTodos() {
    let todos = await axios.get('http://localhost:4000/todos', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });

    setItems(todos.data);
  }

  useEffect(() => {
    getTodos();
  }, []);

  const handleTodoAdd = async name => {
    await axios.post(
      'http://localhost:4000/todos',
      {
        title: name,
        description: name
      },
      {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }
    );

    getTodos();
  };

  const handleDelete = async todo => {
    await axios({
      method: 'DELETE',
      url: `http://localhost:4000/todos/${todo.id}`,
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });

    getTodos();
  };

  const handleEdit = async todo => {
    await axios({
      method: 'PUT',
      url: `http://localhost:4000/todos/${todo.id}`,
      data: {
        ...todo
      },
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });

    getTodos();
  };

  return (
    <div className="todo">
      <TodoAdd onAdd={handleTodoAdd} />
      <TodoList onDelete={handleDelete} items={items} onEdit={handleEdit} />
    </div>
  );
};

export default Todo;
