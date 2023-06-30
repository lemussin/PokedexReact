import React from "react"
import './TitlePokemon.css'

function TitlePokemon({imgSrc, name}){
    
    return(
        <div className="row">
            <div className="col-12 text-center">
                <h4 className="titleDetail">{name}</h4>
                <img src={imgSrc} alt={name} className="titleImg"/>
                <hr/>
            </div>
        </div>
    )
}

export { TitlePokemon }