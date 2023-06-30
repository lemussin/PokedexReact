import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { PokemonContext } from "../../context/PokemonContext"
import { Loading } from "../Loading/Loading"
import { TablePokemon } from "../Elements/TablePokemon"
import { DescriptionPokemon } from "../Elements/DescriptionPokemon"
import { TitlePokemon } from "../Elements/TitlePokemon/TitlePokemon"
import { getBallsDescList } from "../../Utils/Utils"

function DetailBall(){
    const params = useParams()
    const idBall = Number(params.idBall)
    const { loadingBalls, detailsBalls } = useContext(PokemonContext)

    if(loadingBalls) return <Loading />

    const detailPokeball = detailsBalls.find(det => det.id === idBall)

    let ballDescArr = getBallsDescList(detailPokeball.flavor_text_entries)

    return(
        <div className="container">
            <TitlePokemon imgSrc={detailPokeball.sprites.default} name={detailPokeball.name} />

            <DescriptionPokemon descripcion={detailPokeball.effect_entries[0].effect} />

            <div className="row">
                <dl className="row">
                    <dt className="col-sm-3">Costo:</dt>
                    <dd className="col-sm-9">{detailPokeball.cost}</dd>
                    <dt className="col-sm-3">Categoría:</dt>
                    <dd className="col-sm-9">{detailPokeball.category.name}</dd>
                </dl>
            </div>

            <div className="row">
                <div className="col-12">
                    <h5 className="text-muted">Entradas: </h5>
                    <TablePokemon listInfo={ballDescArr} />
                </div>
            </div>
        </div>
    )
}

export { DetailBall }