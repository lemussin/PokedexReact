import React from "react"
import logo from '../../images/LogoPokemon.png'
import { Link } from "react-router-dom"

function Header(){

    return (
        <nav className="navbar navbarPoke">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>
                    <img src={logo} alt="Logo" width="110" height="31" class="d-inline-block align-text-top" />
                </Link>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item"><a href="https://www.pokemon.com/es" target="_blank">Web Oficial</a></li>
                    <li className="list-group-item"><a href="https://home.pokemon.com/es-mx/" target="_blank">Pokémon Home</a></li>
                    <li className="list-group-item"><a href="https://watch.pokemon.com/es-es/" target="_blank">Pokémon TV</a></li>
                </ul>
            </div>
        </nav>
    )
}

export { Header }