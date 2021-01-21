import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';
import { getTodos } from '../redux/todo';

const TodoList = ({ onDelete, onEdit }) => {
  const dispatch = useDispatch();
  const { todos } = useSelector(store => store);

  const handleDelete = name => {
    onDelete(name);
  };

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (todos.length === 0) {
    return <p>You have no items in your list.</p>;
  }

  return (
    <>
      <ul className="todo-list">
        {todos.map(item => (
          <li key={item.id} className="todo-list-item">
            <TodoItem
              todo={item}
              onDelete={e => handleDelete(e)}
              onEdit={onEdit}
            />
          </li>
        ))}
      </ul>
      <TodoFooter />
    </>
  );
};

export default TodoList;
