const ADD_TODO = 'todo-app/todo/ADD_TODO';
const DELETE_TODO = 'todo-app/todo/DELETE_TODO';
const EDIT_TODO = 'todo-app/todo/EDIT_TODO';

const initialState = {
  todos: [
    {
      id: 1,
      title: 'Test',
      description: 'Test'
    },
    { id: 2, title: 'Test 2', description: 'Test 2' }
  ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      let todo = action.payload;
      todo.id = state.todos.length + 1;

      return {
        todos: [...state.todos, todo]
      };
    case DELETE_TODO:
      let todos = state.todos.filter(todo => todo.id !== action.payload);

      return {
        todos: [...todos]
      };
    case EDIT_TODO:
      let todo2 = state.todos.find(todo => todo.id === action.payload.id);
      todo2.title = action.payload.title;
      todo2.description = action.payload.description;
      return {
        todos: [...state.todos]
      };
    default:
      return state;
  }
}

function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  };
}

function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id
  };
}

function editTodo(todo) {
  return {
    type: EDIT_TODO,
    payload: todo
  };
}

export { addTodo, deleteTodo, editTodo };
