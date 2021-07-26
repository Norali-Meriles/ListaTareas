import React from 'react'

const ListadeTareas= ({listas}) => {
     
      const DeleteTarea=(index)=>{
         let validar=window.confirm("Esta seguro de eliminar la tarea de su lista?")
         if(validar){
               listas.splice(index,1)
               localStorage.setItem("listas",JSON.stringify(listas))
              
               return listas
         }
      }
      return (
            <div className="row mt-5 ">
            <div className="col col-md-6  offset-md-3" >
            
            <ul>
              { listas.map((tareas,index) =>(
                  <li className="alert alert-primary" role="alert" key={index}>{tareas} <button  className="boton"  onClick={() => DeleteTarea(index)}>X</button> </li>
             ))}
               </ul>
            
               </div>
           </div>
           
      )
}

export default ListadeTareas
