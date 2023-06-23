import React from "react"
import './Search.css'

function Search({search, setSearch}){

    return(
        <div className="div-search">
            <label className="labelSearch">Buscar:</label>
            <input className="form-control inputSearch" placeholder="Buscar Pokemon" value={search} onChange={(event) => setSearch(event.target.value)}/>
        </div>
    )
}

export {Search}