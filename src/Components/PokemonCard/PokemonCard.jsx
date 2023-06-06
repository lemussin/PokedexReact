import React from "react"
import './PokemonCard.css'
import { Link, useNavigate } from "react-router-dom"
import { buildTypes, buildAbilities,convertHeight, convertWeight } from "../../Utils/Utils"

function PokemonCard({idPokedex, id, image, name, types, abilities, height, weight}){
    
    const navigate = useNavigate()

    const handleOnClick = (id) =>{
        navigate(`/detail/${id}`)
    }

    return (
        <div className="card cardPokemon" style={{width: '18rem'}}>
            <Link to={`/detail/${id}`}>
                <img src={image} class="card-img-top" alt={name} />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{id} - {name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Tipo(s): {buildTypes(types)}</li>
                <li className="list-group-item">Habilidad(es): {buildAbilities(abilities)}</li>
                <li className="list-group-item">Altura: {convertHeight(height)} m, Peso: {convertWeight(weight)} kg</li>
            </ul>
            <div className="card-body">
                <button type="button" class="btn btn-link"
                    onClick={() => handleOnClick(id)}
                ><i className="bi bi-arrow-right-short"></i> Ver detalles</button>
            </div>
        </div>
    )

}

export { PokemonCard }