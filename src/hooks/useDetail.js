import React, { useEffect, useState } from "react";


function useDetail(idPokemon){
    const [loadingDetails, setLoadingDetails] = useState(true)
    const [pokemonDetails, setPokemondetails] = useState({})
    const [pokemonLocations, setPokemonLocations] = useState({})
    const [pokemonSpecie, setPokemonSpecie] = useState({})

    const getPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
        .then(res => res.json())
        .then(res => setPokemondetails(res))
        .then(
            fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}/encounters`)
            .then(data => data.json())
            .then(data => setPokemonLocations(data))
            .then(
                fetch(`https://pokeapi.co/api/v2/pokemon-species/${idPokemon}/`)
                .then(data2 => data2.json())
                .then(data2 => setPokemonSpecie(data2))
            )
        )
    }

    useEffect(() => {
        getPokemon();
        setTimeout(() => {
            setLoadingDetails(false)
        }, 2000)        
      }, []);

    return {loadingDetails, pokemonDetails, pokemonLocations, pokemonSpecie}
}

export {useDetail}