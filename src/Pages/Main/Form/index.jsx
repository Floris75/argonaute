import React, {useState} from 'react';
import listeArgonaute from '../../../Services/liste'
import { TextField, Button } from '@mui/material';

const Form = (props) => {
    const [nomArgonaute, setNom] = useState("")

    const ajouter = async () => {
        try {
            const nom ={nom: nomArgonaute}
            const response = await listeArgonaute.addOne(nom)
            if (response.status === 200){
                document.location.href="/"
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <form class="new-member-form">
            <h3>Nom de l'Argonaute</h3>
            <TextField onChange={(e) => setNom(e.target.value)} id="nom" label="Nom" variant="outlined" placeholder="Charalampos" />
            <Button onClick={() => ajouter()} variant="contained" color='success' >Envoyer</Button>
        </form>
    )
}

export {Form}