import React from "react"
import './Search.css'

function Search({search, setSearch}){

    return(
        <div className="div-search">
            <span class="input-group-text iconSearch" id="basic-addon1"><i class="bi bi-search"></i></span>
            <input className="form-control inputSearch" placeholder="Buscar Pokemon" value={search} onChange={(event) => setSearch(event.target.value)}/>
        </div>
    )
}

export {Search}