import React from "react"
import { useNavigate } from "react-router-dom"

function AccordionPokemon({title, idHeading, listItems, typeAccordion}){

    const navigate = useNavigate()
    const handlePokemonDetails = (name) =>{
        navigate(`/detail/${name}`)
    }

    if(listItems.length === 0) return <p>No Disponible</p>

    return(
        <div class="accordion" id={`accordionMovs${idHeading}`}>
            <h2 class="accordion-header" id={idHeading}>
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${idHeading}`} aria-expanded="true" aria-controls={`collapse${idHeading}`} >
                    {title}
                </button>
            </h2>
            <div id={`collapse${idHeading}`} class="accordion-collapse collapse show" aria-labelledby={idHeading} data-bs-parent="#accordionMovs">
                <div class="accordion-body">
                    <ul className="list-group list-group-flush">
                        {
                            listItems.map(item => (
                                <li className="list-group-item">
                                    {
                                        typeAccordion == 1 
                                        ? item.name 
                                        : <button className="btn btn-link" onClick={() => handlePokemonDetails(item.name)}>{item.name}</button> }
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export {AccordionPokemon}