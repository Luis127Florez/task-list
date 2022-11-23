import './tareas.css';
import BtnEditar from './BtnEditar/BtnEditar';
import { AiFillCaretDown } from "react-icons/ai";
import BtnEliminar from './BtnEliminar/BtnEliminar';
import { useState } from 'react';


function Tarea (props) {
    const [mostarDess , setMostarDes] = useState(false)
    const [actualChecked, setChecked] = useState(false);
    const [actualEstado, setEstado ] = useState("pendiente");

    const cambio = (e)=>{
        setChecked(e.target.checked)
        if (actualChecked) {
            setEstado("pendiente");
        }else{
            setEstado("realizado");
        }
    }     

    return(
        <div>
            <div className={actualEstado}>
                <input  onChange={cambio} type="checkbox" checked={actualChecked} className="checkbox-round" />
                <p >{props.tarea}</p> 
                <div className='btns'>
                    <AiFillCaretDown onClick={()=>setMostarDes(!mostarDess)}/>
                    <BtnEditar tarea={props.tarea} item={props.item} dess={props.dess} /> 
                    <BtnEliminar  item={props.item} />
                </div>
                
            </div>
            { mostarDess? <p> {props.dess} </p> :null }
            
        </div>
    )
}
export default Tarea
