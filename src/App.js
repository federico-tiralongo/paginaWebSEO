import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import { Cabecera } from "./components/Cabecera/Cabecera";
import { Cuerpo } from "./components/Cuerpo";



function App() {
  const [valorAmigo, setValorAmigo] = useState([]);
  const [nombre, setNombre] = useState([]);
  const urlApi = " http://localhost:3001/amigos/";
  const nuevoAmigo = async (urlApi) => {
    
    setValorAmigo(valorAmigo);
  };

  useEffect((respuesta) => nuevoAmigo(urlApi), []);
  return (
    <>
      <div className="container">
       
        <Cabecera />
        <Cuerpo />
      </div>
    </>
  );
}

export default App;
