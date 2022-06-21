import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import rootReducer from './reducer';
import './index.css'
import App from './App'

import './api/server'

let preloadedState;
const persistedTodoString = localStorage.getItem('todos');

if (persistedTodoString) {
  preloadedState = {
    todos: JSON.parse(persistedTodoString)
  };
};

const store = createStore(rootReducer, preloadedState);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
