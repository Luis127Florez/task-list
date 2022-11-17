import './listaTareas.css';
import Tarea from '../Tarea/Tarea';
import { useState } from 'react';



function ListaTareas () {
   const Data = [];
   let ultimo = 0;
    
    function Mostrar () {
        
        for ( const  i in localStorage) {
            if (!isNaN(i)) {
                ultimo = Number(i)
                Data.push(localStorage.getItem(i))
            }
        }
        console.log(Data)
        
    }
        Mostrar();

    const [texto, setTexto] = useState("");

    const handelImputChange = ({target})=>{
        setTexto(target.value)
    }


    function guardar (e) {
        if (texto !== "") {
            for ( const  i in localStorage) {
                if (!isNaN(i)) {
                    if (ultimo < Number(i)) {
                        ultimo = Number(i)
                    }

                }
            }
            localStorage.setItem((ultimo + 1 ),texto)
            alert("Nueva Tarea agregada");
            setTexto("")
            Mostrar()
            
        }else{
            alert("Añada una descripcion")
        }
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
              <button className='buttonTarea' type='submit'> + </button>
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
