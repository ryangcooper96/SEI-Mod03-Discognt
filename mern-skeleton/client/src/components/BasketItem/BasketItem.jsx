import React from 'react'
import ListingCard from '../ListingCard/ListingCard'

function BasketItem({handleClick, item}) {
  //when the cart CRUD controllers are in update accordingly
  // const handleDelete = async (e) => {
  //   try {
  //     await listingService.deleteListing(e);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const handleUpdate = async (e) => {
  //   try {
  //     await listingService.updateListing(e);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  console.log(item._id)
  
  if (item) {
    console.log(item._id)
    
    return (
      <div className='ListingCard'>
      <div className='ListingCard-user'>
        <span className="material-symbols-outlined">
          account_circle
        </span>
        <span>Seller | Seller Rating</span>
        <span className="material-symbols-outlined">
          star
        </span>
      </div>
      <hr></hr>
      <div className='ListingCard-info'>
        <span className='ListingCard-format'>Title: <span>{item.title}</span></span>
        <span className='ListingCard-format'>Format: <span>{item.format}</span></span>
        <span className='ListingCard-condition'>Condition: <span>{item.condition}</span></span>
        <span className='ListingCard-price'>Price: <span>£ {item.price.toFixed(2)}</span></span>
        <span className='ListingCard-description'>"{item.description}"</span>
      </div>
      <button className='ListingCard-button' onClick={() => (handleClick(item._id))}>
        <span>Remove from Cart</span>
        {/* <span className="material-symbols-outlined">
          add_shopping_cart
        </span> */}
        <span className="material-symbols-outlined">
          remove_shopping_cart
        </span>
      </button>
    </div>
  )
}
}

export default BasketItem


