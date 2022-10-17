import React from 'react'
import { NavLink } from 'react-router-dom'
import ListingCard from '../ListingCard/ListingCard'
import useUser from '../../hooks/useUser'
import listing from '../../utils/listing'
import "./Listings.css"
import { useEffect } from 'react'
import { useState } from 'react'

function Listings({ releaseId }) {

  const { user } = useUser()
  const [listings, setListings] = useState([])
  console.log(user)

  useEffect(() => {
    async function getListings() {
      const listings = await listing.getListingsByAlbumId(`${releaseId}`);
      setListings([...listings]);
      console.log(listings);
    }
    getListings();
  }, [releaseId])

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
          {listings.map((listing) => (<ListingCard listing={listing} />))}
          <ListingCard />        
          <ListingCard />        
          <ListingCard />        
        </div>
    </div>
  )
}

export default Listings