import * as todoRepo from '../repositories/todo';

const SET_TODOS = 'todo-app/todo/SET_TODOS';

const initialState = {
  todos: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TODOS:
      return {
        todos: [...action.payload]
      };
    default:
      return state;
  }
}

function getTodos() {
  return async function(dispatch) {
    let todos = await todoRepo.getTodos();
    dispatch(setTodos(todos));
  };
}

function setTodos(todos) {
  return {
    type: SET_TODOS,
    payload: todos
  };
}

function addTodo(todo) {
  return async function(dispatch) {
    await todoRepo.createTodo(todo);
    dispatch(getTodos());
  };
}

function deleteTodo(id) {
  return async function(dispatch) {
    await todoRepo.deleteTodo({ id });
    dispatch(getTodos());
  };
}

function editTodo(todo) {
  return async function(dispatch) {
    await todoRepo.editTodo(todo);
    dispatch(getTodos());
  };
}

export { addTodo, deleteTodo, editTodo, setTodos, getTodos };
