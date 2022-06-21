import todoReducer from './features/todos/todosSlice';
import filtersReducer from './features/filters/filtersSlice';

export default function rootReducer(state = {}, action) {
  return {
    todos: todoReducer(state.todos, action),
    filters: filtersReducer(state.filters, action),
  }
}