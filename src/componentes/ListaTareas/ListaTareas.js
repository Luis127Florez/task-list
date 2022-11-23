import './listaTareas.css';
import Tarea from '../Tarea/Tarea';
import { useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import useList from '../Hooks/useList';
import useMostrar from '../Hooks/useMostrar';


function ListaTareas () {

    const { ultimo , Data } = useMostrar();
    const [mostardess, setMostarDes] = useState(false);

    const [texto, setTexto] = useState("");
    const [dess, setDess] = useState("");

    const{ guardar }= useList(texto, ultimo ,dess);
    
    const handelImputChange = ({target})=>{
        setTexto(target.value)
    }
    
    const passinputChange = ({target})=>{
        setDess(target.value)
    }

    function BuscarId(x) {
        let obj;  
        for (const key in localStorage ) {
            obj = JSON.parse(localStorage.getItem(key));
            if(obj.tarea === x){
                return key

            }
        }
    }
 
    return(
        
        <div className='listaTareas'>
            <center>
            <form onSubmit={guardar}>
              <input className='inputTarea' value={texto} type='text' onChange={handelImputChange} placeholder="Add your new todo"/>
              <button  className='buttonTarea' type='submit'> + </button>
              <br/>
              {mostardess? <input className='inputTarea' value={dess} type='text' onChange={passinputChange} placeholder="Add your descrition"/>: <></>}
              
              <AiFillCaretDown onClick={()=>setMostarDes(!mostardess)}/>
              <br/>
            </form>
            <br/>
            <div id="tareas" className='tareas'>
                { Data.length > 0 ?(
                    Data.map( (x , index )  =>
                    (
                       x ?(
                       <Tarea key={index} item={BuscarId(x.tarea)} tarea={x.tarea} dess={x.descripcion} />
                       ):( <></> ) 
                    )
                  )
                ):(
                    <p>No hay tareas</p>
                )
                }
            </div>
            </center>
        </div>
    )
    
}
export default ListaTareas 
