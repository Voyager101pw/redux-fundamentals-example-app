const initialState = {
  todos: {
    0: { text: 'Learn React', completed: true },
    1: { text: 'Learn Redux', completed: false, color: 'purple' },
    2: { text: 'Build something fun!', completed: false, color: 'blue' },
  },
  ids: [0, 1, 2]
};


const nextTodoId = (todos) => Object.keys(todos).length;

export default function todoReucer(state = initialState, action) {
  switch(action.type) {
    case 'todos/todoAdded': {
      return {
          ...state,
          todos: {
            ...state.todos,
            [nextTodoId(state.todos)]: {
              text: action.payload,
              completed: false,
            },
          }
      }      
    }
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
    default: return state;
  }
}

// Редьюсер всегда чистая функция
// Он не должны создавать случайные значения, такие как Math.random() или Date.now()
// Новое состояние вычисляется на основе аргументов state и action
// Нельзя модифицировать текущий state, любые мутации произовдятся на копии state.
// Никаких «побочных эффектов», таких как вызовы AJAX или асинхронная логика.