import React, {useState, useEffect} from 'react';
import listeArgonaute from '../../../Services/liste'

const Liste = (props) => {
    const [listing, setListing] = useState([])
    
    useEffect(() => {
        const getListe = async () => {
            try {
                const response = await listeArgonaute.getAll()
                console.log(response.data)
                setListing(response.data)
            }
            catch (e) {
                console.log(e)
            }
        }
        getListe()
    }, [])

    return (
        <section class="member-list">
            {listing !== undefined && listing !== [] 
                ? listing.map((argonaute, i) =>
                    <div class="member-item" key={i}> {argonaute.nom_argonaute} </div>
                )
                : null 
                }
        </section>
    )
}

export {Liste}