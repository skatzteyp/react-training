import { useState, useEffect } from 'react';

import * as todoRepo from '../repositories/todo';

export default function useTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    refresh();
  }, []);

  async function refresh() {
    let todos = await todoRepo.getTodos();
    setTodos(todos);
  }

  const createTodo = async name => {
    await todoRepo.createTodo({
      title: name,
      description: name
    });
    refresh();
  };

  const deleteTodo = async todo => {
    await todoRepo.deleteTodo(todo);
    refresh();
  };

  const editTodo = async todo => {
    await todoRepo.editTodo(todo);
    refresh();
  };

  return {
    todos,
    createTodo,
    deleteTodo,
    editTodo
  };
}
