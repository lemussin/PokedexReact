import React, {useContext} from "react";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { PokemonContext } from "../../context/PokemonContext"


function PokemonList({pokemonDetails, idPokedex}){
    const { favorites } = useContext(PokemonContext)

    const getIsFavorite = (id) => {
        if(favorites.filter(pk => pk.id === id).length > 0) 
            return true 
        else 
            return false
    }

    return(
        <div className="row">
            {
                pokemonDetails.map(poke => (
                    <PokemonCard
                        id={poke.id}
                        image={poke.sprites.front_default}
                        name={poke.name}
                        types={poke.types}
                        abilities={poke.abilities}
                        height={poke.height}
                        weight={poke.weight}
                        pokemonFavorite={getIsFavorite(poke.id)}
                        key={poke.id}
                    />
                ))
            }
        </div>
    )
}

export {PokemonList}