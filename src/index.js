import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import rootReducer from './reducer';
import './index.css'
import App from './App'

import './api/server'

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
