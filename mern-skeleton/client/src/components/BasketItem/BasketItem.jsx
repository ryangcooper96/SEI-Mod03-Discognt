import React from 'react'
import ListingCard from '../ListingCard/ListingCard'

function BasketItem(props) {
  return (
                <div className='BasketPage-basketItem'>
                <h3 className='BasketPage-productTitle'>product - title</h3>
                <img className='BasketPage-productImage' src='' alt='product'/>
                <ListingCard /> {props.listing}, £{props.price}
            </div>
  )
}

export default BasketItem