// const initialState = {
//   todos: [
//     { id: 0, text: 'Learn React', completed: true },
//     { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
//     { id: 2, text: 'Build something fun!', completed: false, color: 'blue' },
//   ],
//   filters: {
//     status: 'All',
//     color: [],
//   }
// }

const initialState = {
  todos: {
    0: { text: 'Learn React', completed: true },
    1: { text: 'Learn Redux', completed: false, color: 'purple' },
    2: { text: 'Build something fun!', completed: false, color: 'blue' },
  },
  ids: [0, 1, 2],
  filters: {
    status: 'All',
    color: [],
  }
}

const nextTodoId = (todos) => Object.keys(todos).length;

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'todos/todoAdded': {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false,
          },
        ]
      }      
    }
    // case 'todo/todoToggled': {
    //   return {
    //     ...state,
    //     todos: state.todos.map(todo => {
    //       if (todo.id !== action.payload) {
    //         return todo
    //       }
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       }
    //     })
    //   }
    // }
    case 'todo/todoToggled': {
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload]: {
            ...state.todos[action.payload],
            completed: !state.todos[action.payload].completed,
          }
        }
      }
    }
    case 'todo/todoFilterChanged': {
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload
        }
      }
    }
    default: return state;
  }
}