import React from 'react'
import { NavLink } from 'react-router-dom'
import ListingCard from '../ListingCard/ListingCard'
import "./Listings.css"

function Listings({ releaseId }) {
  return (
    <div className='Listings'>
        <h2>Listings</h2>
        <div className='Listings-container'>
          <NavLink to={`/dashboard/listings/new/${releaseId}`}>
          <button className='Listings-button'>
            <span>Create Listing</span>
            <span className="material-symbols-outlined">
              album
            </span>
          </button>
          </NavLink>
          <ListingCard />        
          <ListingCard />        
          <ListingCard />        
        </div>
    </div>
  )
}

export default Listings