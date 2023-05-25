import React from "react";
import { useParams } from "react-router-dom";
import { ListPokedex } from "../../Data/Data";
import { usePokemon } from "../../hooks/usePokemon";
import { PokemonList } from "../PokemonList/PokemonList";
import { Loading } from "../Loading/Loading";

function Pokedex(){
    const params = useParams();
    const idPokedex = Number(params.idPokedex)
    const pokedexRegional = ListPokedex.find(pokdx => pokdx.id === idPokedex)

    const { pokedex } = usePokemon(pokedexRegional.limit, pokedexRegional.offset)
    const {loadingPokedex, pokemonDetails} = pokedex

    if(loadingPokedex) return <Loading />

    return(
        <>
            <h5>Pokédex de la Región {pokedexRegional.region}</h5>
            <p>Total de Pokémon: <span class="badge bg-success">{pokemonDetails.length}</span></p>
            {!loadingPokedex && <PokemonList pokemonDetails={pokemonDetails} idPokedex={idPokedex} />}
        </>
    )
}

export {Pokedex}