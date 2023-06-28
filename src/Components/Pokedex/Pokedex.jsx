import React from "react";
import { useParams } from "react-router-dom";
import { ListPokedex } from "../../Data/Data";
import { usePokemon } from "../../hooks/usePokemon";
import { PokemonList } from "../PokemonList/PokemonList";
import { Loading } from "../Loading/Loading";
import { Search } from "../Search/Search";
import './Pokedex.css'

function Pokedex(){
    const params = useParams();
    const idPokedex = Number(params.idPokedex)
    const pokedexRegional = ListPokedex.find(pokdx => pokdx.id === idPokedex)

    const { pokedex } = usePokemon(pokedexRegional.limit, pokedexRegional.offset)
    const {loadingPokedex, pokemonDetails, search, setSearch, filteredList} = pokedex

    if(loadingPokedex) return <Loading />

    return(
        <div className="backgroundDexList">
            <h5>Pokédex de la Región {pokedexRegional.region}</h5>
            <div className="row">
                <div className="col-4">
                    <p>Total de Pokémon: <span class="badge bg-success">{pokemonDetails.length}</span></p>
                </div>
                <div className="col-8">
                    <Search search={search} setSearch={setSearch} />
                </div>
            </div>
            
            {!loadingPokedex && <PokemonList pokemonDetails={filteredList} idPokedex={idPokedex} />}
        </div>
    )
}

export {Pokedex}