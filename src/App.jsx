import React  from "react";

import { useState } from "react";
import  ListadeTareas from "./lista";

let listas=JSON.parse(localStorage.getItem("listas")) || []

function App() {
 const [lista,setLista] = useState(""
       
 )

const handleChange=({target})=>{
      
      setLista(
       target.value
      )
     
}
const guardar=(e)=>{
      //funcion que permite no se refresque la pantalla
  e.preventDefault()
        if(lista.length>4 && lista.length<40){
          listas.push(lista)
          console.log(listas)
          localStorage.setItem("listas",JSON.stringify(listas))
          setLista(""
             
          )
         
        }
}
 

  return (
      <>
      <div className="container ">
            <div className="row mt-5">
                  <div className="col col-md-6 offset-md-3  text-center">
                        <h1>Bienvenido</h1>
                  </div>
                  </div>
            <div className="row mt-3">
            <div className="col col-md-6 offset-md-3 text-center">
            
            <h4>Ingrese tus tareas</h4>
            <form onSubmit={guardar}>
            <div className="form-group">
            <input 
            type="text" 
            className="form-control "
            value={lista}
            placeholder="tarea..."
            onChange={handleChange}
            />
            </div>
            </form>
            </div>
            </div>
           
             <ListadeTareas listas={listas} />
             
          
      </div>
  </>  
  );
}

export default App;
