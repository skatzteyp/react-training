import useTodo from '../hooks/useTodo';

const TodoPagination = () => {
  const { todos } = useTodo();

  return <p>You have {todos.length} todos.</p>;
};

export default TodoPagination;
