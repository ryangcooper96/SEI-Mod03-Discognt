import React from 'react'
import { useState, useEffect } from 'react'
import BasketItem from '../../components/BasketItem/BasketItem'
import './Basket.css'
import '../../context/UserContext'
import { UserContext } from '../../context/UserContext'
import useUser from '../../hooks/useUser'
import {NavLink} from "react-router-dom"

function Basket() {
    const [basket, setBasket] = useState([{
        listing: 'test',
        price: 12,

    },
        {
            listing: 'test',
            price: 12,
 
        }])
    const { user } = useUser();
//     console.log(user);
// console.log(user)

//to get the subtotal you'll need to get it into a useeffect
const [subtotal, setSubtotal] = useState(0);

useEffect(() => {
    let prices = [];
    const handleSubtotal = (basket) => {
        basket.forEach((product) => {
            prices.push(product.price)
        })
        return prices.reduce((a, b) => a + b)
    }
    setSubtotal(handleSubtotal(basket))
    console.log(subtotal);
}, [basket, subtotal])
    // need a function to fetch the basket contents from the backend so they can be presented in a list on the frontend

  return (
    <div className='basket-wrapper'>
        {basket.map((item) => {
              return (<BasketItem listing={item.listing} price={item.price} />)
        })}
        <h4>subtotal: £{subtotal}</h4>
        <NavLink to="/checkout" state={{subtotal: subtotal}}><button>Checkout</button></NavLink>
        </div>
    //okay so what does a basket need, it needs a list of everything that's been added to it and probably therefor a component for each item
    //{propsobjectlinkgoeshere.map((e) =>{
    //return (<BasketItem listingIDofsomesort={e}/>)    
    //})}
  )
}

export default Basket