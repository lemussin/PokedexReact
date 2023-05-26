import React from "react"
import { useNavigate } from "react-router-dom"

function DescriptionPokemon({descripcion}){

    const navigate = useNavigate()

    const handleBack = () =>{
        navigate(-1)
    }

    return(
        <React.Fragment>
            <div className="row">
                <div className="col-10">
                    <h5 className="text-muted">Información básica: </h5>
                </div>
                <div className="col-2 text-end">
                    <button className="btn btn-link" onClick={handleBack}>Regresar</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p>{descripcion}</p>
                </div>
            </div>
        </React.Fragment>
        
    )
}

export { DescriptionPokemon }