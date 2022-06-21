import todoReducer from './features/todos/todosSlice';
import filtersReducer from './features/filters/filtersSlice';
import { combineReducers } from 'redux';

// Without using function combineReducers

// export default function rootReducer(state = {}, action) {
//   return {
//     todos: todosReducer(state.todos, action),
//     filters: filtersReducer(state.filters, action)
//   }
// }

const rootReducer = combineReducers({
  todos: todoReducer,
    filters: filtersReducer,
});

export default rootReducer;