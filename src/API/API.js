function getPokemonDetails(url)
{
    let details = {}
    fetch(url)
    .then(res => res.json())
    .then(response => details = response)
    return details
}

export {getPokemonDetails}