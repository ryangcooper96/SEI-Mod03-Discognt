import React from 'react'
import ListingCard from '../ListingCard/ListingCard'

function BasketItem(props) {
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
        <span className='ListingCard-format'>Title: <span>{props.listing}</span></span>
        <span className='ListingCard-format'>Format: <span>{props.format}</span></span>
        <span className='ListingCard-condition'>Condition: <span>{props.condition}</span></span>
        <span className='ListingCard-price'>Price: <span>£ {props.price}</span></span>
        <span className='ListingCard-description'>"{props.description}"</span>
      </div>
      <button className='ListingCard-button'>
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


//   return (
//                 <div className='BasketPage-basketItem'>
//                 <h3 className='BasketPage-productTitle'>product - {props.listing}</h3>
//                 <img className='BasketPage-productImage' src='' alt='product'/>
//                 <ListingCard /> £{props.price} <button>Remove from cart</button>
//             </div>
//   )
// }

export default BasketItem


