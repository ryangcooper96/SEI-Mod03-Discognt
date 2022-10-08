import React from 'react'
import ListingCard from '../ListingCard/ListingCard'
import "./Listings.css"

function Listings() {
  return (
    <div className='Listings'>
        <h2>Listings</h2>
        <div className='Listings-container'>
            <ListingCard />        
        </div>
    </div>
  )
}

export default Listings