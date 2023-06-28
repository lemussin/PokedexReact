import React from "react"
import { BackButton } from "./BackButton/BackButton"

function DescriptionPokemon({descripcion}){

    return(
        <React.Fragment>
            <div className="row">
                <div className="col-10">
                    <h5 className="text-muted">Información básica: </h5>
                </div>
                <div className="col-2 text-end">
                    <BackButton />
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