import React, {useContext} from "react"
import { PokemonContext } from "../../context/PokemonContext"
import './MyFavorites.css'
import { Link } from "react-router-dom"

function MyFavorites(){

    const {favorites} = useContext(PokemonContext)

    return(
        <div className="contenedorFavorites">
            <h3 className="tituloMyFav">Mis Favoritos</h3>
            <ul className="listaMyFav">
                {
                    favorites.map(item => (
                        <li>
                            <Link to={`/detail/${item.id}`} className="enlaceFav">{item.id} - {item.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export {MyFavorites}