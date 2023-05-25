import React from "react"

function Loading(){

    return(
        <div class="d-flex align-items-center">
            <strong>Cargando información...</strong>
            <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    )
}

export { Loading }