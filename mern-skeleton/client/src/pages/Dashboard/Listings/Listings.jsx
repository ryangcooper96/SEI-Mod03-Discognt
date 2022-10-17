import React from 'react'
import Listing from './Listing/Listing'
import listingService from '../../../utils/listing.js'
import { useState, useEffect } from 'react'

function ListingsPage() {
  //fetch listings data
  const [listings, setListings] = useState([{
    _id: '',
    albumId: '',
    title: '',
    format: '',
    condition: '',
    price: 0,
    description: ''
  }])

useEffect(() => {
  const handleListings = async () => {
const listings = await listingService.getListingsbyLoggedInUser();
    setListings([...listings])

}
handleListings();
}, [])
  console.log(listings);
  return (
    <div>{listings.map((item) => {
      return (<Listing listingId={item._id} title={item.title} format={item.format} condition={item.condition} price={item.price} description={item.description} />)
    }
    )
  }</div>)
}

export default ListingsPage