import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/todo';

export default function useTodo() {
  const dispatch = useDispatch();
  const { todos } = useSelector(store => store);

  useEffect(() => {
    if (todos.length === 0) {
      dispatch(actions.getTodos());
    }
  }, []);

  const createTodo = name => {
    dispatch(actions.addTodo({ title: name, description: name }));
  };

  const deleteTodo = todo => {
    dispatch(actions.deleteTodo(todo.id));
  };

  const editTodo = todo => {
    dispatch(actions.editTodo(todo));
  };

  return {
    todos,
    createTodo,
    deleteTodo,
    editTodo
  };
}
