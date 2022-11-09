//import useMostrar from "./useMostrar";

function useGuardar (texto, ultimo) {
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

        
    }else{
        alert("Añada una descripcion")
    }
}

export default useGuardar