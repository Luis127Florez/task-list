import Menu from "./menu/Menu"
import {
    ListItem,
    OrderedList
  } from '@chakra-ui/react'

function SobreNosotros () {
    return(
        <div>
            <Menu/>
            <h2>Sobre Nosotros</h2>
            <strong>Descripcion</strong>
            <p>listas de tareas es una herramienta para ir apuntando cosas que quieres, debes o podrías hacer.</p>
            <strong>Funciones</strong>
            <OrderedList>
            <ListItem>Guarda edita muestra y elimina tareas de forma segura.</ListItem>
            <ListItem>las tareas cuentan con un estado el cual puedes cambiar segun te paresca.</ListItem>
            <ListItem>Te indica en tiempo real el numero de tareas que tienes pendientes.</ListItem>
            <ListItem>Es un siste ma practico y de uso facil.</ListItem>
            </OrderedList>
            <strong>Este sistema fue desarrollado con JavaScript</strong>
            <strong>Usando tecnologias como React</strong>


        </div>
    )
}

export default SobreNosotros