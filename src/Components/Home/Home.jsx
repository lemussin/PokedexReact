import React from "react"
import './Home.css'

function Home(){
    
    return(
        <React.Fragment>
            <div className="homeBackground">
                <h2 className="title">Pokedex by Eduardo Lemus</h2>
            </div>
            <div className="homeGoBackground">
                <h4 className="titleGO">Pokémon GO</h4>
            </div>
        </React.Fragment>
    )
}

export { Home }