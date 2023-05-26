import React, {useContext} from "react"
import { useParams } from "react-router-dom"
import { PokemonContext } from "../../context/PokemonContext"
import { TablePokemon } from "../Elements/TablePokemon"
import { DescriptionPokemon } from "../Elements/DescriptionPokemon"
import { TitlePokemon } from "../Elements/TitlePokemon"
import { getBerriesDescList } from "../../Utils/Utils"

function DetailBerry(){
    const params = useParams()
    const idBerry = Number(params.idBerry)
    const {berries} = useContext(PokemonContext)
    const berry = berries.find(berry => berry.id === idBerry)

    let berriesArr = getBerriesDescList(berry.flavor_text_entries)

    return(
        <div className="container">
            <TitlePokemon imgSrc={berry.sprites.default} name={berry.name} />

            <DescriptionPokemon descripcion={berry.effect_entries[0].effect} />

            <div className="row">
                <dl className="row">
                    <dt className="col-sm-3">Costo:</dt>
                    <dd className="col-sm-9">{berry.cost}</dd>
                    <dt className="col-sm-3">Categoría:</dt>
                    <dd className="col-sm-9">{berry.category.name}</dd>
                </dl>
            </div>

            <div className="row">
                <div className="col-12">
                    <h5 className="text-muted">Entradas: </h5>
                    <TablePokemon listInfo={berriesArr} />
                </div>
            </div>
        </div>
    )

}

export {DetailBerry}