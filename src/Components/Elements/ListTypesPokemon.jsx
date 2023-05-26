import React from "react"
import { getClassByType } from "../../Utils/Utils"

function ListTypesPokemon({types}){
    return(
        <ul className="list-group list-group-horizontal">
            {types.map(type => (
                <li className="list-group-item liGroup"><span className="badge" style={{backgroundColor: getClassByType(type.name)}}>{type.name}</span></li>
            ))}
        </ul>
    )
}

export {ListTypesPokemon}