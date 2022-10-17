import React from "react";
import listingService from "../../../../utils/listing";
import { NavLink } from 'react-router-dom'
import { useEffect } from "react";

function Listing(props) {

    const [state, setState] = React.useState({
        condition: '',
        price: 0,
        description: ''
    })

    const handleChange = (e) => {
        setState((oldState) => ({
            ...oldState,
            // Using ES2015 Computed Property Names
            [e.target.name]: e.target.value,
        }));
    };
    async function handleDelete(id) {
        console.log(id)
        try {
            await listingService.deleteListing(id);
        } catch (error) {
            console.log(error);
        }
    };
    async function handleUpdate(e) {
        // e.preventDefault();
        console.log(e)
        try {
            await listingService.updateListing(props.listingId, state);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        async function fetchListing() {
            const listingData = await listingService.getListingById(props.listingId);
            setState(() => ({...listingData}))
        }
        fetchListing()
    }, [props])

    console.log(props)
    return (
        <div>
            <h4>Title: {props.title}</h4>
            <p>
                Condition: {props.condition}, price: £{`${props.price}`}, description:{" "}
                {props.description}
            </p>
            {/* <button onClick={() => handleUpdate(props.listingId)}>Update</button> */}
            <form onSubmit={handleUpdate}>
                <input name='condition' type='text' placeholder={`${props.condition}`} value={state.condition} onChange={handleChange} />
                <input name='price' type='number' placeholder={`${props.price}`} value={state.price} onChange={handleChange} />
                <textarea name='description' type='text' placeholder={`${props.description}`} value={state.description} onChange={handleChange} />
                <button>update</button>
            </form>



            <button onClick={() => handleDelete(props.listingId)}>Delete</button>
        </div>
    );
}

export default Listing;
