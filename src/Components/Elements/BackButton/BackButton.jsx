import React from "react"
import './estilos.css'
import { useNavigate } from "react-router-dom"

function BackButton(){
    const navigate = useNavigate()

    const onBack = () => {
        navigate(-1)
    }

    return(
        <button type="button" class="btn buttonBack" onClick={onBack}>
            <i className="bi bi-arrow-left"></i> Regresar
        </button>
    )
}

export {BackButton}