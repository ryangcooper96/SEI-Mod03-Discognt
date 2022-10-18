import React from "react";
import listingService from "../../../../utils/listing";
import { NavLink } from 'react-router-dom'
import { useEffect } from "react";
import './Listing.css'

function Listing(props) {

    const [state, setState] = React.useState({
        // condition: '',
        // price: 0,
        // description: ''
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
        setState({})
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
            setState(() => ({ ...listingData }))
        }
        fetchListing()
    }, [props])

    function isObjectPopulated(value) {
        return !(Object.keys(value).length === 0 && value.constructor === Object);
    }


    console.log(props)
    if (isObjectPopulated(state)) {
        return (
            <div className="dashboard-listing-wrapper">
                <h4>{state.title}</h4>
                {/* <p>
                Condition: {state.condition}, price: £{`${state.price}`}, description:{" "}
                {state.description}
            </p> */}
                {/* <button onClick={() => handleUpdate(props.listingId)}>Update</button> */}
                <form className="dashboard-listing-form" onSubmit={handleUpdate}>
                    <div className="dashboard-listing-form-element">
                        <label for='condition'>Condition</label>
                        <input className="dashboard-listing-input" name='condition' type='text' placeholder={`${state.condition}`} value={state.condition} onChange={handleChange} />
                    </div>
                    <div className="dashboard-listing-form-element">
                        <label for='price'>Price</label>
                        <input className="dashboard-listing-input" name='price' type='number' placeholder={`${state.price}`} value={state.price} onChange={handleChange} />
                    </div>
                    <div className="dashboard-listing-form-element">
                        <label for="description">Description</label>
                        <textarea className="dashboard-listing-input" name='description' type='text' placeholder={`${state.description}`} value={state.description} onChange={handleChange} />
                    </div>
                    <button className="dashboard-listing-button"><span>Update</span></button>
                </form>



                <button className="dashboard-listing-button" onClick={() => handleDelete(props.listingId)}>Delete</button>
            </div>
        );
    }
}

export default Listing;
