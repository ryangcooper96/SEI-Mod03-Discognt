import React, { useState } from 'react'
import "./ListingCard.css"

function ListingCard({ listing }) {

//   useEffect(() => {
//     async function getListings() {
//       const listings = await listing.getListingsByAlbumId(`${releaseId}`);
//       setListings([...listings]);
//       console.log(listings);
//     }
//     getListings();
//   }, [releaseId])

// NEED TO FIND A WAY TO GET THE USER ASSOCIATED WITH A LISTING


if (listing) {
    return (
        <div className='ListingCard'>
            <div className='ListingCard-user'>
                <span className="material-symbols-outlined">
                    account_circle
                </span>
                {/* <span>{listing.user.username} | {listing.user.rating} </span> */}
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
            <button className='ListingCard-button'>
                <span>Add to Basket</span>
                <span className="material-symbols-outlined">
                    add_shopping_cart
                </span>
                {/* <span className="material-symbols-outlined">
                    remove_shopping_cart
                </span> */}
            </button>
        </div>)
} else {return <></>}
}

export default ListingCard