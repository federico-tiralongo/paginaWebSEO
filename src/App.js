//import { useState } from 'react';
//import { useEffect } from 'react';
import './App.css';
import { Footer } from "./components/Footer/Footer";
import { Cabecera } from "./components/Cabecera/Cabecera";
import { Cuerpo } from "./components/Cuerpo/Cuerpo";
import { Formulario } from './components/Formulario/Formulario';



function App() {
  
  return (
    <>
      <div>
        <Cabecera />
        <Cuerpo />
        <Formulario/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
