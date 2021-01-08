import './App.css';

function App() {
  return (
    <div className="todo">
      <div className="todo-add">
        <input type="text" className="todo-add-input" />
        <button className="todo-add-button">Add</button>
      </div>
      <ul className="todo-list">
        <li className="todo-list-item">
          <p>Todo 1</p>
          <button className="todo-list-item-delete">Delete</button>
        </li>
        <li className="todo-list-item">
          <p>Todo 1</p>
          <button className="todo-list-item-delete">Delete</button>
        </li>
        <li className="todo-list-item">
          <p>Todo 1</p>
          <button className="todo-list-item-delete">Delete</button>
        </li>
        <li className="todo-list-item">
          <p>Todo 1</p>
          <button className="todo-list-item-delete">Delete</button>
        </li>
        <li className="todo-list-item">
          <p>Todo 1</p>
          <button className="todo-list-item-delete">Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
