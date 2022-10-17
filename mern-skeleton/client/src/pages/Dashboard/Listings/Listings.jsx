import React from 'react'
import Listing from './Listing/Listing'
import listing from '../../../utils/listing.js'
import { useState, useEffect } from 'react'

function ListingsPage() {
  //fetch listings data
  const [listings, setListings] = useState([{
    listingId: '',
    albumId: '',
    title: 'test',
    format: 'test',
    condition: 'test',
    price: 0,
    description: 'test'
  },
    {
      listingId: '',
      albumId: '',
      title: 'test',
      format: 'test',
      condition: 'test',
      price: 0,
      description: 'test'
    },
    {
      listingId: '',
      albumId: '',
      title: 'test',
      format: 'test',
      condition: 'test',
      price: 0,
      description: 'test'
    }])

useEffect(() => {
setListings(listing.getListingsbyLoggedInUser());
console.log(listings);
}, [])
  return (
    <div>{listings.map((item) => {
      return (<Listing listingId={item.listingId} title={item.title} format={item.format} condition={item.condition} price={item.price} description={item.description} />)
    }
    )
  }</div>)
}

export default ListingsPage