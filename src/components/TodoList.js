import React from 'react';

import TodoItem from './TodoItem';

const todoItems = [
  'Wake up',
  'Eat Breakfast',
  'Take a Bath',
  'Go to School',
  'Learn Something',
  'Go Home',
  'Go toSleep'
];

const TodoList = () => {
  const handleDelete = name => {
    console.log(`Delete ${name}`);
  };

  return (
    <ul className="todo-list">
      {todoItems.map(item => (
        <li key={item} className="todo-list-item">
          <TodoItem todo={item} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
