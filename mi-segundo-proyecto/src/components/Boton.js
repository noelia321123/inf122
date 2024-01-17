
import '../style/Boton.css';
import React from 'react';
function Boton({ texto, esBotonClick, funcionClick }) {

    return (
        <button className={esBotonClick ? "boton-click" : "boton-reinciar"}
            onClick={funcionClick}>
            {texto}
        </button>
    )
}

export default Boton;