import './Menu.css'
function Menu() {
    return(
        <div>
            <ul className="padreLista">
                <li className="item"><a href="/">Home</a></li>
                <li className="item"><a href="/Tareas">Tareas</a></li>
                <li className="item"><a href="/Snosotros">Sobre Nosotros</a></li>
            </ul>
        </div>
    )
}
export default Menu