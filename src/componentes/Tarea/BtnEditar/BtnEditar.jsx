import React from "react";
import  {AiFillEdit}  from "react-icons/ai";
import './BtnEditar.css'

function BtnEditar(props) {
    
    function editar () {

        let nuevaTarea = "";
        nuevaTarea = prompt("Edite",props.tarea);
        localStorage.setItem(props.item, nuevaTarea);
        alert("Tarea Modificada");
        window.location.reload(false); 
        
    }

    return(
        <AiFillEdit onClick={editar} className="btneditar"/>
    )

}

export default BtnEditar 
