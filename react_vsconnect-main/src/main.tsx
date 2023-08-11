import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from "react-router-dom"
// import App from './App'
import './index.css'
import Home from './pages/Home'
import ListaServicos from './pages/Servicos'
import Header from './components/Header'
import Footer from './components/Footer'
import CadastroDev from './pages/CadastroDev'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ < Home />} />
        <Route path='teste' element={ < ListaServicos />} />
        <Route path='teste2' element={ < CadastroDev />} />
      </Routes>
      <Footer />
      
     
    </BrowserRouter>
  </React.StrictMode>
)
