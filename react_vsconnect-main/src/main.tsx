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
import CadastroServ from './pages/CadastroServ'
import Login from './pages/Login'
import ListaDevs from './pages/ListaDevs'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ < Home />} />
        <Route path='teste' element={ < ListaServicos />} />
        <Route path='teste2' element={ < CadastroDev />} />
        <Route path='teste3' element={ < CadastroServ />} />
        <Route path='teste4' element={ < Login />} />
        <Route path='teste5' element={ < ListaDevs />} />
      </Routes>
      <Footer />
      
     
    </BrowserRouter>
  </React.StrictMode>
)
