import { BrowserRouter, Routes, Route } from "react-router-dom"
import ListTask from "./componentes/ListTask"
import Home from "./componentes/Home/Home"
import SobreNosotros from "./componentes/SobreNosotros"
function Enrutador() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Tareas" element={<ListTask/>} />
                <Route path="/Snosotros" element={<SobreNosotros/>} />
            </Routes>
        </BrowserRouter>

    )
}

export default Enrutador