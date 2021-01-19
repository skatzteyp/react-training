import axios from 'axios';

const headers = {
  Authorization: localStorage.getItem('token')
};

async function getTodos() {
  let todos = await axios.get('http://localhost:4000/todos', {
    headers
  });

  return todos.data;
}

async function createTodo(todo) {
  await axios.post('http://localhost:4000/todos', todo, {
    headers
  });
}

async function deleteTodo(todo) {
  await axios({
    method: 'DELETE',
    url: `http://localhost:4000/todos/${todo.id}`,
    headers
  });
}

async function editTodo(todo) {
  await axios({
    method: 'PUT',
    url: `http://localhost:4000/todos/${todo.id}`,
    data: {
      ...todo
    },
    headers
  });
}

export { getTodos, createTodo, deleteTodo, editTodo };
