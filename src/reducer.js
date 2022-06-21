import todoReducer from './features/todos/todosSlice';
import filtersReducer from './features/filters/filtersSlice';
import { combineReducers } from 'redux';

export default function rootReducer(state = {}, action) {
  return combineReducers({
    todos: todoReducer, // аналог todos: todoReducer(state.todos, action)
    filters: filtersReducer,
  })
}