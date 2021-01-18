import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(todo.title);

  const handleDelete = () => {
    onDelete(todo);
  };

  const handleSave = () => {
    if (edit) {
      onEdit({ ...todo, title: name, description: name });
    }

    setEdit(!edit);
  }

  return (
    <>
      <div className={`todo-name ${edit ? 'is-edit' : ''}`}>
        <p>{todo.title}</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button className="todo-item-delete" onClick={() => handleSave()}>
        {edit ? 'Save' : 'Edit'}
      </button>
      <button className="todo-item-delete" onClick={() => handleDelete()}>
        Delete
      </button>
    </>
  );
};

export default TodoItem;
