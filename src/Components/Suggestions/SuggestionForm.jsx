import React from "react"
import './SuggestionForm.css'

function SuggestionForm(){
    return(
        <div className="row">
            <div className="col-12 form">
                <h4 className="titulo">Sugerencias: </h4>
                <input type="text" placeholder="Nombre" className="formElement" />
                <input type="text" placeholder="Email" className="formElement" />
                <textarea placeholder="Comenta algo" className="formElement"></textarea>
                <button className="btnStyle">Enviar</button>
            </div>
        </div>
    )
}

export {SuggestionForm}