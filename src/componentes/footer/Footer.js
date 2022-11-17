import React from "react";
import './Footer.css';

function Footer() {

    function clearAll () {
        if (window.confirm("Estas seguro de limpiar Todo")) {
            localStorage.clear();
            window.location.reload(false); 

        }

    }

    return(
        <div className="Footer">
            <p>Total tasks {localStorage.length} </p>
            <button onClick={clearAll} className="btnclear">Clear All</button>
        </div>
    )    
}
export default Footer