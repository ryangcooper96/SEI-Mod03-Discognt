import React from 'react'
import Listing from './Listing/Listing'
import { useState } from 'react'

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
  return (
    <div>{listings.map((item) => {
      return (<Listing listingId={item.listingId} title={item.title} format={item.format} condition={item.condition} price={item.price} description={item.description} />)
    }
    )
  }</div>)
}

export default ListingsPage