import React from 'react';

const TodoItem = ({ todo }) => (
  <>
    <p>{todo}</p>
    <button className="todo-item-delete">Delete</button>
  </>
);

export default TodoItem;
