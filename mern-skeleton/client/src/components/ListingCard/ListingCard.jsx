import React, { useState } from 'react'
import { useEffect } from 'react'
import { NavLink} from 'react-router-dom'
import useUser from '../../hooks/useUser'
import listing from "../../utils/listing"
import cart from "../../utils/cart"

import "./ListingCard.css"

function ListingCard({ listing }) {

    const [basket, setBasket] = useState([]);
    const { user } = useUser();
    // console.log(user);
    
    // OBTAIN USER BASKET
    useEffect(() => {
        async function getCart() {
            const userCart = await cart.getCartByOwnerId(user._id)
            setBasket([...userCart])
        }
        getCart()
    }, [user])

    // ADD TO BASKET
    function handleAddToBasket() {
        // function from utils/cart.js to add to add listing to basket (listing._id)
        // getCart()
    }
    
    // NEED TO FIND A WAY TO GET THE USER ASSOCIATED WITH A LISTING
    function isListingOwnedByUser() {
        return (listing.in_collection.owner._id === user._id)
    }

    // IF LISTING BELONGS TO USER THEN DIRECT TO UPDATE LISTING PAGE
    function isListingInBasket() {
        console.log(listing.id)
    }    



if (listing) {
    return (
        <div className='ListingCard'>
            <div className='ListingCard-user'>
                <span className="material-symbols-outlined">
                    account_circle
                </span>
                <span>{listing.in_collection.owner.name} | {(Math.random() * 5).toFixed(2)} </span>
                <span className="material-symbols-outlined">
                    star
                </span>
            </div>
            <hr></hr>
            <div className='ListingCard-info'>
                <span className='ListingCard-format'>Format: <span>LP Vinyl</span></span>
                <span className='ListingCard-condition'>Condition: <span>{listing.condition}</span></span>
                <span className='ListingCard-price'>Price: <span>£ {listing.price}</span></span>
                <span className='ListingCard-description'>"{listing.description}"</span>
            </div>
            {/* <button className='ListingCard-button'>
                <span>Add to Basket</span>
                <span className="material-symbols-outlined">
                    add_shopping_cart
                </span>
                <span className="material-symbols-outlined">
                    remove_shopping_cart
                </span>
            </button> */}
            {isListingOwnedByUser() ? (
                <NavLink to='/dashboard/listings/' >
                <button className='ListingCard-button'>
                    <span>Update Listing</span>
                    <span className="material-symbols-outlined">
                        album
                    </span>
                </button>
                </NavLink>) 
                : 
                (<button className='ListingCard-button' value={listing._id} onClick={handleAddToBasket}>
                    {}
                    <span>Add to Basket</span>
                    <span className="material-symbols-outlined">
                        add_shopping_cart
                    </span>
                    <span>Remove from Basket</span>
                    <span className="material-symbols-outlined">
                        remove_shopping_cart
                    </span>                    
                </button>)
            }
        </div>)
} else {return <></>}
}

export default ListingCard