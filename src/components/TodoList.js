import React from 'react';

import TodoItem from './TodoItem';

const TodoList = ({ items, onDelete, onEdit }) => {
  const handleDelete = name => {
    onDelete(name);
  };

  if (items.length === 0) {
    return <p>You have no items in your list.</p>;
  }

  return (
    <ul className="todo-list">
      {items.map(item => (
        <li key={item.id} className="todo-list-item">
          <TodoItem todo={item} onDelete={e => handleDelete(e)} onEdit={onEdit} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
