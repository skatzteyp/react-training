import React, { useState } from 'react';

import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

const todoItems = [
  'Wake up',
  'Eat Breakfast',
  'Take a Bath',
  'Go to School',
  'Learn Something',
  'Go Home',
  'Go toSleep'
];

const Todo = () => {
  const [items, setItems] = useState(todoItems);

  const handleTodoAdd = name => {
    setItems([...items, name]);
  };

  const handleDelete = name => {
    let index = items.indexOf(name);

    items.splice(index, 1);

    setItems([...items]);
  };

  return (
    <div className="todo">
      <TodoAdd onAdd={handleTodoAdd} />
      <TodoList onDelete={handleDelete} items={items} />
    </div>
  );
};

export default Todo;
