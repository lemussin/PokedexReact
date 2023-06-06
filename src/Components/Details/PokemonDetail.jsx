import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useDetail } from "../../hooks/useDetail"
import { Loading } from "../Loading/Loading"
import { buildAbilities, convertHeight, convertWeight, getClassByType, buildGroupEggs, getListTypes, getPokedexList, getPokemonGamesList } from "../../Utils/Utils"
import './PokemonDetail.css'
import { ListTypesPokemon } from "../Elements/ListTypesPokemon"
import { TablePokemon } from "../Elements/TablePokemon"
import { AccordionPokemon } from "../Elements/AccordionPokemon"
import { TitlePokemon } from "../Elements/TitlePokemon"

function PokemonDetail()
{
    const navigate = useNavigate()
    const params = useParams()
    const idPokemon = params.idPokemon
    const {loadingDetails, pokemonLocations, pokemonDetails, pokemonSpecie} = useDetail(idPokemon)
    
    const handleRegresar = () =>{
        navigate(-1)
    }

    if(loadingDetails) return <Loading />

    //Generamos un array que enviaremos al elemento ListTypesPokemon
    let types = getListTypes(pokemonDetails.types)
    let pokedex = getPokedexList(pokemonSpecie.flavor_text_entries)
    let games = getPokemonGamesList(pokemonDetails.game_indices)
    
    return(
        <>
            <TitlePokemon imgSrc={pokemonDetails.sprites.front_default} name={pokemonDetails.name.toUpperCase()} />

            <div className="row">
                <div className="col-10">
                    <h5>Sprites: </h5>
                </div>
                <div className="col-2 text-end">
                    <button type="button" class="btn btn-link" onClick={handleRegresar}>
                        <i className="bi bi-arrow-left"></i> Regresar
                    </button>
                </div>
                
            </div>
            <div className="row">
                <div className="col-2 text-center">
                    <img src={pokemonDetails.sprites.front_default} className="rounded card-img-top imgCard" alt="Frente" />
                    <p>Frente</p>
                </div>
                <div className="col-2 text-center">
                    {
                        !pokemonDetails.sprites.back_default && <p>Imagen no disponible</p>
                    }
                    {
                        pokemonDetails.sprites.back_default && <img src={pokemonDetails.sprites.back_default} className="rounded card-img-top imgCard" alt="Espalda"/>
                    }
                    <p>Espalda</p>
                </div>
                <div className="col-2 text-center">
                    {
                        !pokemonDetails.sprites.front_shiny && <p>Imagen no disponible</p>
                    }
                    {
                        pokemonDetails.sprites.front_shiny && <img src={pokemonDetails.sprites.front_shiny} className="rounded card-img-top imgCard" alt="Shiny"/>
                    }
                    <p>Frente Shiny</p>
                </div>
                <div className="col-2 text-center">
                    {
                        !pokemonDetails.sprites.back_shiny && <p>Imagen no disponible</p>
                    }
                    {
                        pokemonDetails.sprites.back_shiny && <img src={pokemonDetails.sprites.back_shiny} className="rounded card-img-top imgCard" alt="Shiny Espalda"/>
                    }
                    <p>Espalda Shiny</p>
                </div>
                <div className="col-2 text-center">
                    {
                        pokemonDetails.sprites.front_female && <img src={pokemonDetails.sprites.front_female} className="rounded card-img-top imgCard" alt="Frente Female"/>
                    }
                    {
                        !pokemonDetails.sprites.front_female && <p>Imagen no disponible</p>
                    }
                    <p>Female</p>
                </div>
                <div className="col-2 text-center">
                    {
                        pokemonDetails.sprites.front_shiny_female && <img src={pokemonDetails.sprites.front_shiny_female} className="rounded card-img-top imgCard" alt="Frente Shiny Female"/>
                    }
                    {
                        !pokemonDetails.sprites.front_shiny_female && <p>Imagen no disponible</p>
                    }
                    <p>Female Shiny</p>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col 12">
                    <h5 className="text-muted">Entradas de la Pokédex: </h5>
                    <hr/>
                    <TablePokemon listInfo={pokedex} />
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <h5 className="text-muted">Información de {pokemonDetails.name}: </h5>
                    <hr/>
                </div>
                <div className="row">
                    <dl className="row">
                        <dd className="col-sm-12">
                            <dl className="row">
                                <dt className="col-sm-3">Pokédex Nacional:</dt>
                                <dd className="col-sm-3">#{pokemonSpecie.pokedex_numbers[0].entry_number}</dd>
                                <dt className="col-sm-3">Generación:</dt>
                                <dd className="col-sm-3">{pokemonSpecie.generation.name}</dd>
                            </dl>
                        </dd>
                        <dt className="col-sm-3">Tipo(s):</dt>
                        <dd className="col-sm-9">
                            <ListTypesPokemon types={types}/>
                        </dd>
                        <dt className="col-sm-3">Altura:</dt>
                        <dd className="col-sm-9">{convertHeight(pokemonDetails.height)} m</dd>
                        <dt className="col-sm-3">Peso:</dt>
                        <dd className="col-sm-9">{convertWeight(pokemonDetails.weight)} kg</dd>
                        <dt className="col-sm-3">Experiencia Base:</dt>
                        <dd className="col-sm-9">{pokemonDetails.base_experience}</dd>
                        <dt className="col-sm-3">Felicidad Base:</dt>
                        <dd className="col-sm-9">{pokemonSpecie.base_happiness} pts.</dd>
                        <dt className="col-sm-3">Habilidades:</dt>
                        <dd className="col-sm-9">{buildAbilities(pokemonDetails.abilities)}</dd>
                        <dt className="col-sm-3">Grupo de Huevos:</dt>
                        <dd className="col-sm-9">{buildGroupEggs(pokemonSpecie.egg_groups)}</dd>
                        <dd className="col-sm-12">
                            <dl className="row">
                                <dt className="col-sm-3">Pokémon Bebé:</dt>
                                <dd className="col-sm-1">{pokemonSpecie.is_baby ? 'Si' : 'No'}</dd>
                                <dt className="col-sm-3">Pokémon Legendario:</dt>
                                <dd className="col-sm-1">{pokemonSpecie.is_legendary ? 'Si' : 'No'}</dd>
                                <dt className="col-sm-3">Pokémon Mitico:</dt>
                                <dd className="col-sm-1">{pokemonSpecie.is_mythical ? 'Si' : 'No'}</dd>
                            </dl>
                        </dd>
                    </dl>
                </div>
            </div>
            <br/>
            <div className="row">
                <h5>Estadisticas Base:</h5>
                <div className="col-2">
                    <div className="card cardHP">
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">PS</h6>
                            <p className="card-text">{pokemonDetails.stats[0].base_stat}</p>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="card cardAttack">
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">Ataque</h6>
                            <p className="card-text">{pokemonDetails.stats[1].base_stat}</p>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="card cardDefense">
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">Defensa</h6>
                            <p className="card-text">{pokemonDetails.stats[2].base_stat}</p>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="card cardAttackSpc">
                        <div className="card-body">
                            <h6 className="ccard-subtitle mb-2 text-muted">Ataque Esp.</h6>
                            <p className="card-text">{pokemonDetails.stats[3].base_stat}</p>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="card cardDefenseSpc">
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">Defensa Esp.</h6>
                            <p className="card-text">{pokemonDetails.stats[4].base_stat}</p>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="card cardSpeed">
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">Velocidad</h6>
                            <p className="card-text">{pokemonDetails.stats[5].base_stat}</p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row space">
                <h5>Locaciones:</h5>
                <div className="col-12">
                    <div className="accordion" id="accordionFlushExample">
                        {pokemonLocations.length === 0 && <p>No Disponible</p>}
                        {
                            pokemonLocations.map((location, index) => (        
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id={`heading${index}`}>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collpase${index}`} aria-expanded="false" aria-controls={`collpase${index}`}>
                                            {location.location_area.name}
                                        </button>
                                    </h2>
                                    <div id={`collpase${index}`} class="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            {
                                                location.version_details.map(detail => (
                                                    <div>
                                                        <h6>Juego: {detail.version.name}</h6>
                                                        <p>Max Oportunidad: {detail.max_chance}%, Metodos de captura:</p>
                                                        <ul>
                                                            {
                                                                detail.encounter_details.map(encounter => (
                                                                    <li>{encounter.method.name}: Con niveles entre: {encounter.min_level} y {encounter.max_level}</li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <br/>
            <div className="row space">
                <h5>Juegos donde aparece:</h5>
                <AccordionPokemon title="Ver Juegos:" idHeading="AccGames" 
                    listItems={games} typeAccordion={1} 
                />
            </div>
        </>
        
    )
}

export { PokemonDetail }