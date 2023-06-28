import React, { useContext } from "react"
import { PokemonContext } from "../../context/PokemonContext"
import { useNavigate } from "react-router-dom"
import { Loading } from "../Loading/Loading"

function ListBerries(){
    const navigate = useNavigate()
    const {berries, loadingBalls} = useContext(PokemonContext)
    
    const handleDetail = (id) =>{
        navigate(`/detailBerry/${id}`)
    }

    if(loadingBalls) return <Loading />

    return (
        <div className="container">
            <div className="row">
                <h5 className="text-center">Lista de Berries</h5>
                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sprite</th>
                            <th>Nombre</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            berries.map(berry => (
                                <tr>
                                    <td><img src={berry.sprites.default} alt={berry.name} /></td>
                                    <td>{berry.name}</td>
                                    <td>
                                        <button className="btn btn-link" onClick={() => handleDetail(berry.id)}>
                                            Ver Detalles
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export {ListBerries}