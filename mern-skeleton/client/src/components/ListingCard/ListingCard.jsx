import React, { useState } from 'react'
import "./ListingCard.css"

function ListingCard() {

    const [listing, setListing] = useState({
        user: {username: 'Ryan6753', rating: 4.6},
        condition: "Mint",
        format: "LP Vinyl",
        description: "In really good nick!",
        price: 17.99,
    })

  return (
    <div className='ListingCard'>
        <div className='ListingCard-user'>
            <span class="material-symbols-outlined">
                account_circle
            </span>
            <span>{listing.user.username} | {listing.user.rating} </span>
            <span class="material-symbols-outlined">
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
                    shopping_basket
                </span>
            </button>
    </div>
  )
}

export default ListingCard