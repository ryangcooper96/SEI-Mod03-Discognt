import React from 'react'
import ListingCard from '../ListingCard/ListingCard'
import "./Listings.css"

function Listings() {
  return (
    <div className='Listings'>
        <h2>Listings</h2>
        <div className='Listings-container'>
          <button className='Listings-button'>
            <span>Create Listing</span>
            <span className="material-symbols-outlined">
              album
            </span>
          </button>
          <ListingCard />        
          <ListingCard />        
          <ListingCard />        
        </div>
    </div>
  )
}

export default Listings