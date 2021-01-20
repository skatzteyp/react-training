import { useSelector } from 'react-redux';

const TodoPagination = () => {
  const { todos } = useSelector(store => store);

  return <p>You have {todos.length} todos.</p>;
};

export default TodoPagination;
