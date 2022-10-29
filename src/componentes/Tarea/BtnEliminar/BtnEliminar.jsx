import React from "react";
import  {AiFillDelete}  from "react-icons/ai";
import './BtnEliminar.css';

function BtnEliminar(props) {

    function eliminar() {
        if (window.confirm('Esta seguro De Eliminar esta tarea ?')) {
            
            localStorage.removeItem(props.item);
            alert("Tarea Eliminada")
            window.location.reload(false);
        }
    }

    return(
        <AiFillDelete onClick={eliminar} className="btndelete"/>
    )
}

export default BtnEliminar 