import Boton from "./components/Botones";
import "../src/hojasdeestilo/boton.css";
import { useState } from "react";
import "./App.css";
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear";
import { evaluate } from "mathjs";

function App() {

  const [input,setInput]=useState("");

  const agregarInput=valor=>{
    setInput(input +  valor)
  }

  const calcularResultado=()=>{
    if(input){
      setInput(evaluate(input))
    }else{
      alert("Por favor ingrese valores para los calculos")
    }
    
  }





  return (
    <>
      <div className="calc">
        <Pantalla input={input}/>
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>

        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={()=> setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </>
  );
}

export default App;
