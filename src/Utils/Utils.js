import { ClasessTypes, generations } from "../Data/Data"

const VALUE_CONVERTION = 10.0

function buildTypes(types){
    let typesPokemon = ''
    for(var i = 0; i < types.length; i++){
        if(i === 0)
            typesPokemon = types[i].type.name
        else
            typesPokemon += ', ' + types[i].type.name
    }
    return typesPokemon
}

function buildAbilities(abilities){
    let abilitiesPokemon = ''
    for(var i = 0; i < abilities.length; i++){
        if(i ===0 )
            abilitiesPokemon = abilities[i].ability.name
        else
            abilitiesPokemon += ', ' + abilities[i].ability.name
    }
    return abilitiesPokemon
}

function convertHeight(height){
    return height / VALUE_CONVERTION
}

function convertWeight(weight){
    return weight / VALUE_CONVERTION
}

function getClassByType(type){
    const classType = ClasessTypes.find(tp => tp.type === type)
    if(classType === undefined) return 'blue'
    return classType.class
}

function buildGroupEggs(groups){
    let groups_eggs = ''
    for(var i = 0; i < groups.length; i++){
        if(i ===0 )
            groups_eggs = groups[i].name
        else
            groups_eggs += ', ' + groups[i].name
    }
    return groups_eggs
}

function getListTypes(listTypes){
    let types = []
    listTypes.map(type => {
        let typeAux = { name: type.type.name }
        types.push(typeAux)
    })
    return types
}

function getPokedexList(list){
    let pokedex = []
    list.filter((dex) => {
        return dex.language.name === "es"
    })
    .map(pokeDes => {
        let aux = {version: pokeDes.version.name, desc: pokeDes.flavor_text}
        pokedex.push(aux)
    })
    return pokedex
}

function getPokemonGamesList(list){
    let games = []
    list.map(game => {
        let gamesAux = {name: game.version.name}
        games.push(gamesAux)
    })
    return games
}

function getBerriesDescList(list){
    let berriesArr = []
    list.filter(text => {
        return text.language.name === 'es'
    })
    .map(desc => {
        let aux = {version: desc.version_group.name, desc: desc.text}
        berriesArr.push(aux)
    })
    return berriesArr
}

function getBallsDescList(list){
    let ballDescArr = []
    list.filter(text => {
        return text.language.name === 'es'
    })
    .map(desc => {
        let aux = {version: desc.version_group.name, desc: desc.text}
        ballDescArr.push(aux)
    })
    return ballDescArr
}

function getLinkGeneration(name){
    let link
    link = generations.find(gen => gen.name === name)
    return `/generation/${link.idGen}`
}

export { 
            buildTypes, 
            buildAbilities, convertHeight, convertWeight, 
            getClassByType, buildGroupEggs, getListTypes, 
            getPokedexList, getPokemonGamesList, getBerriesDescList,
            getBallsDescList, getLinkGeneration
       }