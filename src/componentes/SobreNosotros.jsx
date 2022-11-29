import Menu from "./menu/Menu"
function SobreNosotros () {
    return(
        <div>
            <Menu/>
            <h2>Sobre Nosotros</h2>
            <strong>Descripcion</strong>
            <p>listas de tareas es una herramienta para ir apuntando cosas que quieres, debes o podrías hacer.</p>
            <strong>Funciones</strong>
            <ol>
                <li>Guarda edita muestra y elimina tareas de forma segura.</li>
                <li>las tareas cuentan con un estado el cual puedes cambiar segun te paresca.</li>
                <li>Te indica en tiempo real el numero de tareas que tienes pendientes.</li>
                <li>Es un sistema practico y de uso facil.</li>
            </ol>
            <strong>Este sistema fue desarrollado con JavaScript</strong>
            <strong>Usando tecnologias como React</strong>


        </div>
    )
}

export default SobreNosotros