import React from "react";
import { PokemonCard } from "../PokemonCard/PokemonCard";

function PokemonList({pokemonDetails, idPokedex}){

    return(
        <div className="row">
            {
                pokemonDetails.map(poke => (
                    <PokemonCard
                        idPokedex={idPokedex}
                        id={poke.id}
                        image={poke.sprites.front_default}
                        name={poke.name}
                        types={poke.types}
                        abilities={poke.abilities}
                        height={poke.height}
                        weight={poke.weight}
                    />
                ))
            }
        </div>
    )
}

export {PokemonList}