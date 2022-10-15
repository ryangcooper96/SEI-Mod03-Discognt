import React from 'react'
import { useState } from 'react'
import BasketItem from '../../components/BasketItem/BasketItem'
import './Basket.css'

function Basket() {
    const [basket, setBasket] = useState([{
        listing: 'test',
        price: 12,
        quantity: 1
    },
        {
            listing: 'test',
            price: 12,
            quantity: 1
        }])
    // need a function to fetch the basket contents from the backend so they can be presented in a list on the frontend
    
  return (
    <div className='basket-wrapper'>
        {basket.map((item) => {
              return (<BasketItem listing={item.listing} price={item.price} quantity={item.quantity} />)
        })}
        </div>
    //okay so what does a basket need, it needs a list of everything that's been added to it and probably therefor a component for each item
    //{propsobjectlinkgoeshere.map((e) =>{
    //return (<BasketItem listingIDofsomesort={e}/>)    
    //})}
  )
}

export default Basket