import React from 'react';

const TodoItem = ({ todo }) => {
  const handleDelete = name => {
    console.log(`delete ${name}`);
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
