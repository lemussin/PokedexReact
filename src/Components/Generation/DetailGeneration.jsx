import React, { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PokemonContext } from "../../context/PokemonContext"
import { getClassByType } from "../../Utils/Utils"

function DetailGeneration(){
    const {generations} = useContext(PokemonContext)
    const params = useParams()
    const navigate = useNavigate()
    const idGen = Number(params.idGen)
    const generation = generations.find(item => item.id === idGen)

    const handlePokemonDetails = (name) =>{
        navigate(`/detail/${name}`)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h5>{generation.name} ({generation.id})</h5>
                    <hr />
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <h6>Información Basica:</h6>
                </div>
                <hr />
            </div>

            <div className="row">
                <div className="col-12">
                    <dl className="row">
                        <dt className="col-sm-3">Región:</dt>
                        <dd className="col-sm-9">{generation.main_region.name}</dd>
                        <dt className="col-sm-3">Número de Pokémon:</dt>
                        <dd className="col-sm-9">{generation.pokemon_species.length}</dd>
                        <dt className="col-sm-3">Tipos introducidos:</dt>
                        <dd className="col-sm-9">
                            <ul className="list-group list-group-horizontal">
                                {generation.types.map(type => (
                                    <li className="list-group-item liGroup"><span className="badge" style={{backgroundColor: getClassByType(type.name)}}>{type.name}</span></li>
                                ))}
                            </ul>  
                        </dd>
                        <dt className="col-sm-3">Grupo de Versiones:</dt>
                        <dd className="col-sm-9">
                            <ul className="list-group list-group-horizontal">
                                {
                                    generation.version_groups.map(version => (
                                        <li className="list-group-item liGroup"><span className="badge bg-secondary">{version.name}</span></li>
                                    ))
                                }
                            </ul>
                        </dd>
                    </dl>                
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <h6>Pokémon agregados:</h6>
                    <div class="accordion" id="accordionExample">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                Ver Pokémon
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <ul className="list-group list-group-flush">
                                    {
                                        generation.pokemon_species.map(pkm => (
                                            <li className="list-group-item">
                                                <button className="btn btn-link" onClick={() => handlePokemonDetails(pkm.name)}>{pkm.name}</button>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <h6>Movimientos agregados:</h6>
                    <div class="accordion" id="accordionExample">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Ver Movimientos
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <ul className="list-group list-group-flush">
                                    {
                                        generation.moves.map(move => (
                                            <li className="list-group-item">
                                                {move.name}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { DetailGeneration }