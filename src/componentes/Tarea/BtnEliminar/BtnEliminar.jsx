import React from "react";
import  {AiFillDelete}  from "react-icons/ai";
import './BtnEliminar.css';
import useList from "../../Hooks/useList";

function BtnEliminar(props) {

    const {eliminar} =  useList("", props.item) 

    return(
        <AiFillDelete onClick={eliminar} className="btndelete"/>
    )
}

export default BtnEliminar 