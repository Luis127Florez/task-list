//import useMostrar from "./useMostrar";

function useList (texto, ultimo, dess) {

    const guardar=() => {
        if (texto !== "") {
            for ( const  i in localStorage) {
                if (!isNaN(i)) {
                    if (ultimo < Number(i)) {
                        ultimo = Number(i)
                    }
    
                }
            }
            localStorage.setItem((ultimo + 1 ), JSON.stringify({tarea:texto, descripcion:dess}))
            return alert("Nueva Tarea agregada");
    
            
        }else{
          return  alert("Añada una descripcion")
        }
    }

    function editar () {

        let nuevaTarea = "";
        let nuevadess = "";
        nuevaTarea = prompt("Edite",texto);
        nuevadess = prompt("Edite Descripcion",dess);
        localStorage.setItem(ultimo, JSON.stringify({tarea:nuevaTarea, descripcion:nuevadess}));
        alert("Tarea Modificada");
        window.location.reload(false); 
        
    }

    const eliminar= ()=> {
        if (window.confirm('Esta seguro De Eliminar esta tarea ?')) {
            
            localStorage.removeItem(ultimo);
            alert("Tarea Eliminada")
            window.location.reload(false);
        }
    } 
    return { guardar, editar, eliminar }
    
}

export default useList