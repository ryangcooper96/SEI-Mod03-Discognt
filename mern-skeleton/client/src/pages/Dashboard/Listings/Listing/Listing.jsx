import React from 'react'
import listingService from '../../../../utils/listing'

function Listing(props) {
    const handleDelete = async (e) => {
        try {
            await listingService.deleteListing(e);
        } catch (error) {
            console.log(error)
        }
    }
    const handleUpdate = async (e) => {
        try {
            await listingService.updateListing(e);
        } catch (error) {
            console.log(error)
        }
    }

    
    return (
        <div><h4>Title: {props.title}</h4><p>Condition: {props.condition}, price: £{`${props.price}`}, description: {props.description}</p><button onClick={handleUpdate(props.listingId) }>Update</button><button onClick={handleDelete(props.listingId)}>Delete</button></div>
    )
}

export default Listing