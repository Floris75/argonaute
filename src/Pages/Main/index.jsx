import React from "react"
import {Liste} from './Liste/index'
import {Form} from './Form/index'

const Main = (props) => {

    return (
        <main>
  
            <h2>Ajouter un(e) Argonaute</h2>
            <Form />
  
            <h2>Membres de l'équipage</h2>
            <Liste/>
        </main>
    )
}

export {Main}