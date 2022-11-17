import './listaTareas.css';
import Tarea from '../Tarea/Tarea';
import { useState } from 'react';
import useList from '../Hooks/useList';
import useMostrar from '../Hooks/useMostrar';


function ListaTareas () {

    const { ultimo , Data } = useMostrar();

    const [texto, setTexto] = useState("");

    const{ guardar }= useList(texto, ultimo);
    
    const handelImputChange = ({target})=>{
        setTexto(target.value)
    }

    function BuscarId(x) {
        for (const key in localStorage ) {
            if(localStorage.getItem(key) === x){
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
            </form>
            <br/>
            <div id="tareas" className='tareas'>
                { Data.length > 0 ?(
                    Data.map( (x , index )  =>
                    (
                       x ?(
                       <Tarea key={index} item={BuscarId(x)} tarea={x} />
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
