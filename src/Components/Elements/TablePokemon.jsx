import React from "react"

function TablePokemon({listInfo}){
    return(
        <table className="table table-striped table-hover">
            <thead className="table-dark">
                <tr>
                    <th>Juego/Versión</th>
                    <th>Descripción</th>
                </tr>
            </thead>
            <tbody>
                {

                    listInfo.map(info => (
                        <tr>
                            <td>{info.version}</td>
                            <td>{info.desc}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export { TablePokemon }