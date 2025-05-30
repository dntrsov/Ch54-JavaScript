import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Footer } from './pages/footer/footer'
import { NavBar } from './pages/navbar/navbar'
import { Home } from './pages/home/home'  // <- Nombre del componente con mayúscula

function App() {
  const myJsx = (

    <>
      <NavBar title="El día de Harry Potter" />
      <Home name = "Myrtle la llorana" howargtsHome = "Slythering"/> 
      <Home name = "Draco Malfoy" howargtsHome = "Slythering"/> 
      <Footer  cohorte = {54} />
    </>
  );

  return myJsx;
}

export default App;

