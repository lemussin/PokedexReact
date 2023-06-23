import React, { useEffect } from "react";

function usePokemon(limit , offset ){
    const [loadingPokedex, setLoadingPokedex] = React.useState(true)
    const [pokemonDetails, setPokemonDetails] = React.useState([])

    //Función de buscar Pokemon
    const [search, setSearch] = React.useState('')
    const [filteredList, setFilteredList] = React.useState([])

    const getAllPokemons = async () => {
      setPokemonDetails([])
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const data = await res.json();
      
        function createPokemonObject(result) {
          let detailsArr = []
          result.forEach(async (pokemon) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            const data = await res.json();
            detailsArr.push(data)
            //setPokemonDetails((currentList) => [...currentList.sort(((a, b) => a.id - b.id)), data]);
            //setPokemonDetails((currentList) => [...currentList, data]);
          });
          setPokemonDetails(detailsArr)
          setFilteredList(detailsArr)
        }

        createPokemonObject(data.results);
    };

    const getAllPokemonsNoAsync = () =>{
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then(res => res.json())
      .then(data => {
        let detailsArr = []
        data.results.map(item => {
          fetch(item.url)
          .then(data2 => data2.json())
          .then(data2 => {detailsArr.push(data2)})
          .then(setPokemonDetails(detailsArr))
        })
      })
    }

    useEffect(() => {
        setLoadingPokedex(true)
        getAllPokemons()
        setTimeout(() => {
          setSearch('')
          setLoadingPokedex(false)
        }, 2500)
    }, [limit]);

    //Effect to filter the Pokemon List and render the info in the View
    useEffect(() => {
      if(search.length === 0)
        setFilteredList(pokemonDetails)
      let lista = pokemonDetails.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))
      setFilteredList(lista)

    }, [search])

    const pokedex = {loadingPokedex, pokemonDetails, search, setSearch, filteredList}

    return { pokedex }
}

export  { usePokemon }