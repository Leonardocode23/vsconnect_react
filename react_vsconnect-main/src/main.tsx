import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import Home from './pages/Home'
import ListaSevicos from './pages/servicos'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    < ListaSevicos />
  </React.StrictMode>
)
