import React from "react";
import  {AiFillEdit}  from "react-icons/ai";
import useList from "../../Hooks/useList";
import './BtnEditar.css'

function BtnEditar(props) {
    const {editar } = useList(props.tarea, props.item)
    
    return(
        <AiFillEdit onClick={editar} className="btneditar"/>
    )

}

export default BtnEditar 
