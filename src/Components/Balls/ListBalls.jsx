import React, { useContext } from "react"
import { Loading } from "../Loading/Loading"
import { PokemonContext } from "../../context/PokemonContext"
import { useNavigate } from "react-router-dom"

function ListBalls({loadingBalls, balls, detailsBalls}){
    //const { loadingBalls, balls, detailsBalls } = useContext(PokemonContext)
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/detailPokeBall/${id}`)
    }

    if(loadingBalls) return <Loading />

    return(
        <div className="row">
            <div className="col-12">
                <h5 className="text-center">Lista de Poke balls</h5>
                <hr/>
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
                            balls.items.map(ball => (
                                <tr>
                                    <td><img src={getSprite(ball.name, detailsBalls)} alt={ball.name} /></td>
                                    <td>{ball.name}</td>
                                    <td>
                                        <button className="btn btn-link" onClick={() => handleClick(getIdBall(ball.name, detailsBalls))}>
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

function getSprite(name, detailsBalls){
    const poki = detailsBalls.find(det => det.name === name)
    return poki.sprites.default
}

function getIdBall(name, detailsBalls){
    const poki = detailsBalls.find(det => det.name === name)
    return poki.id
}

export { ListBalls }