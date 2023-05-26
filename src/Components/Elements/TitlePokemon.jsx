import React from "react"

function TitlePokemon({imgSrc, name}){
    
    return(
        <div className="row">
            <div className="col-12 text-center">
                <h5><img src={imgSrc} alt={name} height="35px"/> {name}</h5>
                <hr/>
            </div>
        </div>
    )
}

export { TitlePokemon }