import React from "react"
import logo from '../../images/LogoPokemon.png'
import { Link } from "react-router-dom"
import './Header.css'

function Header(){

    return (
        <nav className="navbar navbarPoke">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>
                    <img src={logo} alt="Logo" width="110" height="31" class="d-inline-block align-text-top" />
                </Link>
                <ul className="list-group list-group-horizontal lista">
                    <li className="list-group-item"><a href="https://www.pokemon.com/es" target="_blank" className="enlace">Web Oficial</a></li>
                    <li className="list-group-item"><a href="https://home.pokemon.com/es-mx/" target="_blank" className="enlace">Pokémon Home</a></li>
                    <li className="list-group-item"><a href="https://watch.pokemon.com/es-es/" target="_blank" className="enlace">Pokémon TV</a></li>
                </ul>
                <Link to={'/MyFavorites'} className="btnFavs">My favorites</Link>
            </div>
        </nav>
    )
}

export { Header }