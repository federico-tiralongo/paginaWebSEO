import { Botones } from "../Botones/Botones";
import { Titulo } from "../Titulo"; 
import './Cabecera.css';

export const Cabecera = () => {
  return (
    <>
    <div class="cabezera1 row">
      <div class="col-4">
        <Botones className="botones" />
      </div>
      <div class="col-4">  
        <Titulo className="titulo" />
      </div>
      <div class="col-4">
        <Botones className="botones" />
      </div>
    </div>  
    </>
  );
};
