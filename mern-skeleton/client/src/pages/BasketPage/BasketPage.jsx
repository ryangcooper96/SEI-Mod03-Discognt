import React from 'react'
import { useState } from 'react'
import ListingCard from '../../components/ListingCard/ListingCard';
import "./BasketPage.css"

function BasketPage() {

  const [basket, setBasket] = useState([]);
  
  return (
    <div className='BasketPage'>
        <div className='BasketPage-container'>
            <div className='BasketPage-basketItem'>
                <h3 className='BasketPage-productTitle'>product - title</h3>
                <img className='BasketPage-productImage' src='' alt='product'/>
                <ListingCard />
            </div>
            <button className='BasketPage-checkout'>
                Checkout
                <span className="material-symbols-outlined">
                    shopping_cart_checkout
                </span>
            </button>
        </div>
    </div>
  )
}

export default BasketPage