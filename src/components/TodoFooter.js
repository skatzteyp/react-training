import TodoPagination from './TodoPagination';

const TodoFooter = ({ todos }) => (
  <footer>
    <TodoPagination count={todos.length} />
    <small>Made in LIG</small>
  </footer>
);

export default TodoFooter;
