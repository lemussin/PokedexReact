import { ClasessTypes } from "../Data/Data"

const CONVERT_VALUE_CM = 30.48
const CONVERT_VALUE_KG = 2.20462262
const VALUE_CONVERTION = 10.0

function buildTypes(types){
    let typesPokemon = ''
    for(var i = 0; i < types.length; i++){
        if(i ===0 )
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

export {buildTypes, buildAbilities, convertHeight, convertWeight, getClassByType, buildGroupEggs}