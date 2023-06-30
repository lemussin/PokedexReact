const ListPokedex = [
    {
        id: 1,
        region: 'Kanto',
        limit: 151,
        offset: 0
    },
    {
        id: 2,
        region: 'Johto',
        limit: 100,
        offset: 151
    },
    {
        id: 3,
        region: 'Hoenn',
        limit: 135,
        offset: 251
    },
    {
        id: 4,
        region: 'Sinnoh',
        limit: 107,
        offset: 386
    },
    {
        id: 5,
        region: 'Teselia',
        limit: 156,
        offset: 493
    },
    {
        id: 6,
        region: 'Kalos',
        limit: 72,
        offset: 649
    },
    {
        id: 7,
        region: 'Alola',
        limit: 88,
        offset: 721
    },
    {
        id: 8,
        region: 'Galar',
        limit: 96,
        offset: 809
    },
    {
        id: 9,
        region: 'Paldea',
        limit: 103,
        offset: 905
    },
]

const ClasessTypes = [
    { type: 'grass', class: '#73c752' },
    { type: 'poison',class: '#a59' },
    { type: 'fire', class: '#f42' },
    { type: 'flying', class: '#89f' },
    { type: 'fighting', class: '#b54' },
    { type: 'water', class: '#39f' },
    { type: 'dark', class: '#754' },
    { type: 'ghost',class: '#66b' },
    { type: 'bug',class: '#ab2' },
    { type: 'electric', class: '#fc3' },
    { type: 'normal',class: '#aa9' },
    { type: 'steel',class: '#aab' },
    { type: 'psychic',class: '#f59' },
    { type: 'rock', class: '#ba6'},
    { type: 'dragon', class: '#76e' },
    { type: 'ground', class: '#db5' },
    { type: 'fairy', class: '#e9e'},
    { type: 'ice', class: '#66ccff'},
]

const tableType ={
    pokemon: 1,
    pokeBall: 2,
    berry: 3,
    generation: 4
}

const generations = [
    { name: 'generation-i', idGen: 1},
    { name: 'generation-ii', idGen: 2},
    { name: 'generation-iii', idGen: 3},
    { name: 'generation-iv', idGen: 4},
    { name: 'generation-v', idGen: 5},
    { name: 'generation-vi', idGen: 6},
    { name: 'generation-vii', idGen: 7},
    { name: 'generation-viii', idGen: 8},
    { name: 'generation-ix', idGen: 9},
]

export { ListPokedex, ClasessTypes, tableType, generations }