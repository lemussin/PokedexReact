import React, { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PokemonContext } from "../../context/PokemonContext"
import { Loading } from "../Loading/Loading"
import { PokemonDetail } from "../Details/PokemonDetail"

function DetailBall(){
    const params = useParams()
    const idBall = Number(params.idBall)
    const { loadingBalls, detailsBalls } = useContext(PokemonContext)
    const navigate = useNavigate()

    const handleBack = () =>{
        navigate(-1)
    }

    if(loadingBalls) return <Loading />

    const detailPokeball = detailsBalls.find(det => det.id === idBall)

    return(
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h5><img src={detailPokeball.sprites.default} alt={detailPokeball.name} /> {detailPokeball.name}</h5>
                    <hr/>
                </div>
            </div>

            <div className="row">
                <div className="col-10">
                    <h5 className="text-muted">Información basica: </h5>
                </div>
                <div className="col-2 text-end">
                    <button className="btn btn-link" onClick={handleBack}>Regresar</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p>{detailPokeball.effect_entries[0].effect}</p>
                </div>
            </div>
            <div className="row">
                <dl className="row">
                    <dt className="col-sm-3">Costo:</dt>
                    <dd className="col-sm-9">{detailPokeball.cost}</dd>
                    <dt className="col-sm-3">Categoría:</dt>
                    <dd className="col-sm-9">{detailPokeball.category.name}</dd>
                </dl>
            </div>

            <div className="row">
                <div className="col-12">
                    <h5 className="text-muted">Entradas: </h5>
                    <table className="table table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Juego/Versión</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                detailPokeball.flavor_text_entries.filter(text => {
                                    return text.language.name === 'es'
                                })
                                .map(desc => (
                                    <tr>
                                        <td>{desc.version_group.name}</td>
                                        <td>{desc.text}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export { DetailBall }