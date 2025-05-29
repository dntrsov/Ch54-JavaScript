import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Footer } from './pages/footer/footer'
import { NavBar } from './pages/navbar/navbar'
import { Home } from './pages/home/home'  // <- Nombre del componente con mayúscula

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home> 
      <Footer></Footer>
    </>
  );
}

export default App;

