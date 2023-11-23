import React from 'react'
import ReactDOM from 'react-dom/client'
// Универсальный маршритизатор отслеживает историю перехрода пользователя
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
