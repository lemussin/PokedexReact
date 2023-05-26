import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { PokemonContext } from "../../context/PokemonContext"
import { ListTypesPokemon } from "../Elements/ListTypesPokemon"
import { AccordionPokemon } from "../Elements/AccordionPokemon"

function DetailGeneration(){
    const {generations} = useContext(PokemonContext)
    const params = useParams()
    const idGen = Number(params.idGen)
    const generation = generations.find(item => item.id === idGen)

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
                                <ListTypesPokemon types={generation.types} />
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
                    <AccordionPokemon 
                        title="Ver Pokémon:" 
                        idHeading="AccPokm" 
                        listItems={generation.pokemon_species} 
                        typeAccordion={2} 
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <h6>Movimientos agregados:</h6>
                    <AccordionPokemon 
                        title="Ver Movimientos:" 
                        idHeading="AccMovs" 
                        listItems={generation.moves} 
                        typeAccordion={1} 
                    />
                </div>
            </div>
        </div>
    )
}

export { DetailGeneration }