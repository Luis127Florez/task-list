import React from "react";
import  {AiFillEdit}  from "react-icons/ai";
import './BtnEditar.css'

function BtnEditar(props) {
    
    function editar () {

        let nuevaTarea = "";
        nuevaTarea = prompt("Edite",props.tarea);
        if (nuevaTarea) {
            localStorage.setItem(props.item, nuevaTarea);
            alert("Tarea Modificada");
            window.location.reload(false); 
        }else{
            alert("No lleno el campo de texto ");
        }
        
        
    }

    return(
        <AiFillEdit onClick={editar} className="btneditar"/>
    )

}

export default BtnEditar 
