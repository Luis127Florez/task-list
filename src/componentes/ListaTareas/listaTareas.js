import './listaTareas.css';
import Tarea from '../Tarea/tarea';

function listaTareas () {
    return(
        <div className='listaTareas'>
            <center>
            <form>
              <input className='inputTarea' type='text' placeholder="Add your new todo"/>
              <button className='buttonTarea' type='submit'> + </button>
            </form>
            <br/>
            <div className='tareas'>
                <Tarea tarea="buy a new gaming laptop"/>
                <Tarea tarea="complete a previus stask"/>
                <Tarea tarea="create video for youtube"/>
                <Tarea tarea="create a new portafolio site"/>

            </div>
            </center>
        </div>
    )
    
}
export default listaTareas 