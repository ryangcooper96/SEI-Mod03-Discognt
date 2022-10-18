import React from 'react'
import './BasketItem.css'

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
      <div className='BasketItem'>
      <div className='BasketItem-user'>
        <span className="material-symbols-outlined">
          account_circle
        </span>
          <span> Seller | Seller Rating</span>
        <span className="material-symbols-outlined">
          star
        </span>
      </div>
      <hr></hr>
      <div className='BasketItem-info'>
        <span className='BasketItem-title'>Title: <span>{item.title}</span></span>
        <span className='BasketItem-format'>Format: <span>{item.format}</span></span>
        <span className='BasketItem-condition'>Condition: <span>{item.condition}</span></span>
        <span className='BasketItem-price'>Price: <span>£ {item.price.toFixed(2)}</span></span>
        <span className='BasketItem-description'>"{item.description}"</span>
      </div>
      <button className='BasketItem-button' onClick={() => (handleClick(item._id))}>
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


