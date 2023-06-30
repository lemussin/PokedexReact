import React, { useState, useContext } from "react"
import './PokemonCard.css'
import { Link, useNavigate } from "react-router-dom"
import { buildTypes, buildAbilities,convertHeight, convertWeight } from "../../Utils/Utils"
import { PokemonContext } from "../../context/PokemonContext"

function PokemonCard({id, image, name, types, abilities, height, weight, pokemonFavorite}){
    const { addFavorite, deleteFavorite } = useContext(PokemonContext)
    const [isFavorite, SetIsFavorite] = useState(pokemonFavorite)
    const navigate = useNavigate()

    const handleOnClick = (id) =>{
        navigate(`/detail/${id}`)
    }

    const handleIsFavorite = () =>{
        addFavorite(id, name)
        SetIsFavorite(true)
    }

    const handleIsNotFavorite = () =>{
        deleteFavorite(id)
        SetIsFavorite(false)
    }

    const renderIcon = () =>{
        if(isFavorite){
            return(
                <button className="btnFav" onClick={handleIsNotFavorite}>
                    <i class="bi bi-star-fill iconFav"></i>
                </button>
            )
        }
        else{
            return(
                <button className="btnFav" onClick={handleIsFavorite}>
                    <i class="bi bi-star"></i>
                </button>
            )
        }
    }

    return (
        <div className="card cardPokemon" style={{width: '18rem'}}>
            {renderIcon()}
            <Link to={`/detail/${id}`}>
                <img src={image} class="card-img-top" alt={name} />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{id} - {name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Tipo(s): {buildTypes(types)}</li>
                <li className="list-group-item habilities">Habilidad(es): {buildAbilities(abilities)}</li>
                <li className="list-group-item">Altura: {convertHeight(height)} m, Peso: {convertWeight(weight)} kg</li>
            </ul>
            <div className="card-body">
                <button type="button" class="btn linked"
                    onClick={() => handleOnClick(id)}
                >Ver detalles<i className="bi bi-arrow-right-short"></i></button>
            </div>
        </div>
    )

}

export { PokemonCard }