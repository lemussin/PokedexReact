import React from "react"
import logo from '../../images/LogoPokemon.png'
import { Link } from "react-router-dom"

function Header(){

    return (
        <nav className="navbar navbarPoke">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>
                    <img src={logo} alt="Logo" width="110" height="32" class="d-inline-block align-text-top" />
                </Link>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-dark" type="button">Search</button>
                </form>
            </div>
        </nav>
    )
}

export { Header }