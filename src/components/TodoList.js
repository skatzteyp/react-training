import React from 'react';

import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';
import useTodo from '../hooks/useTodo';

const TodoList = () => {
  const { todos } = useTodo();

  if (todos.length === 0) {
    return <p>You have no items in your list.</p>;
  }

  return (
    <>
      <ul className="todo-list">
        {todos.map(item => (
          <li key={item.id} className="todo-list-item">
            <TodoItem todo={item} />
          </li>
        ))}
      </ul>
      <TodoFooter />
    </>
  );
};

export default TodoList;
