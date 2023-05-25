import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Layout.css'
import { Header } from "../Components/Header/Header";


function Layout({children}){
    return (
        <React.Fragment>
            <Header />
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link align-middle px-0 sidebarText">
                                        <i className="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle sidebarText">
                                        <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Pokédex</span> 
                                    </a>
                                    <ul className="collapse nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <Link to={'/pokedex/1'} className="nav-link px-0 sidebar-li"> <span className="d-none d-sm-inline">Kanto</span></Link>
                                        </li>
                                        <li>
                                            <Link to={'/pokedex/2'} className="nav-link px-0 sidebar-li"> <span className="d-none d-sm-inline">Johto</span></Link>
                                        </li>
                                        <li>
                                            <Link to={'/pokedex/3'} className="nav-link px-0 sidebar-li"> <span className="d-none d-sm-inline">Hoenn</span></Link>
                                        </li>
                                        <li>
                                            <Link to={'/pokedex/4'} className="nav-link px-0 sidebar-li"> <span className="d-none d-sm-inline">Sinnoh</span></Link>
                                        </li>
                                        <li>
                                            <Link to={'/pokedex/5'} className="nav-link px-0 sidebar-li"> <span className="d-none d-sm-inline">Teselia</span></Link>
                                        </li>
                                        <li>
                                            <Link to={'/pokedex/6'} className="nav-link px-0 sidebar-li"> <span className="d-none d-sm-inline">Kalos</span></Link>
                                        </li>
                                        <li>
                                            <Link to={'/pokedex/7'} className="nav-link px-0 sidebar-li"> <span className="d-none d-sm-inline">Alola</span></Link>
                                        </li>
                                        <li>
                                            <Link to={'/pokedex/8'} className="nav-link px-0 sidebar-li"> <span className="d-none d-sm-inline">Galar</span></Link>
                                        </li>
                                        <li>
                                            <Link to={'/pokedex/9'} className="nav-link px-0 sidebar-li"> <span className="d-none d-sm-inline">Paldea</span></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle sidebarText">
                                        <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Generaciones</span>
                                    </a>
                                    <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                        <li>
                                            <Link to={'/generation/1'} className="nav-link px-0 sidebar-li"> <span className="d-none d-sm-inline">Generación 1</span></Link>
                                        </li>
                                        <li>
                                            <Link to={'/generation/2'} className="nav-link px-0 sidebar-li"> <span className="d-none d-sm-inline">Generación 2</span></Link>
                                        </li>
                                        <li>
                                            <Link to={'/generation/3'} className="nav-link px-0 sidebar-li"> <span className="d-none d-sm-inline">Generación 3</span></Link>
                                        </li>
                                        <li>
                                            <Link to={'/generation/4'} className="nav-link px-0 sidebar-li"> <span className="d-none d-sm-inline">Generación 4</span></Link>
                                        </li>
                                        <li>
                                            <Link to={'/generation/5'} className="nav-link px-0 sidebar-li"> <span className="d-none d-sm-inline">Generación 5</span></Link>
                                        </li>
                                        <li>
                                            <Link to={'/generation/6'} className="nav-link px-0 sidebar-li"> <span className="d-none d-sm-inline">Generación 6</span></Link>
                                        </li>
                                        <li>
                                            <Link to={'/generation/7'} className="nav-link px-0 sidebar-li"> <span className="d-none d-sm-inline">Generación 7</span></Link>
                                        </li>
                                        <li>
                                            <Link to={'/generation/8'} className="nav-link px-0 sidebar-li"> <span className="d-none d-sm-inline">Generación 8</span></Link>
                                        </li>
                                        <li>
                                            <Link to={'/generation/9'} className="nav-link px-0 sidebar-li"> <span className="d-none d-sm-inline">Generación 9</span></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/ListBalls'} className="nav-link align-middle px-0 sidebarText"
                                    >
                                        <i className="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Poke Balls</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/ListSpecialBalls'} className="nav-link align-middle px-0 sidebarText">
                                        <i className="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Special Balls</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/listBerries'} className="nav-link align-middle px-0 sidebarText">
                                        <i className="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Berries</span>
                                    </Link>
                                </li>
                            </ul>                            
                        </div>
                    </div>
                    <div className="col py-3">
                        {children}
                    </div>
                </div>
            </div>
            
        </React.Fragment>
        
    )
}

export {Layout}