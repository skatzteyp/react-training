import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  const handleDelete = name => {
    onDelete(name);
  };

  return (
    <>
      <p>{todo}</p>
      <button className="todo-item-delete" onClick={() => handleDelete(todo)}>
        Delete
      </button>
    </>
  );
};

export default TodoItem;
