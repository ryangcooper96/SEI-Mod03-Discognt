import React from 'react'
import { useState, useEffect } from 'react'
import BasketItem from '../../components/BasketItem/BasketItem'
import './Basket.css'
import '../../context/UserContext'
import { UserContext } from '../../context/UserContext'
import useUser from '../../hooks/useUser'
import cart from '../../utils/cart'
import listing from "../../utils/listing"
import {NavLink} from "react-router-dom"

function Basket() {

    
    const [basket, setBasket] = useState([])
    const [subtotal, setSubtotal] = useState(0);
    const { user } = useUser();

    // OBTAIN USER BASKET
    useEffect(() => {
        async function getCart() {
            const userCart = await listing.getListingsInCartbyLoggedInUser()
            console.log("userCart: ", userCart)
            setBasket([...userCart])
        }
        getCart()
    }, [user])

    // UPDATE BASKET TOTAL
    useEffect(() => {
        let prices = [];
        if (basket.length) {
            const handleSubtotal = (basket) => {
                basket.forEach((product) => {
                    prices.push(product.price)
                })
                return prices.reduce((a, b) => a + b)
            }
            setSubtotal(handleSubtotal(basket).toFixed(2))
        }
        console.log(subtotal);
    }, [basket, subtotal])

    // REMOVE FROM BASKET CART TROLLEY CARGO PLANE
    function handleClick(listingId) {
        async function deleteItem(listingId) {
            console.log(listingId)
            await listing.deleteListingFromCart(listingId)
            setBasket((prev) => [...prev.filter((listing) => (listing._id !== listingId))])
        }
        deleteItem(listingId);
    }

    // need a function to fetch the basket contents from the backend so they can be presented in a list on the frontend

  return (
    <div className='Basket'>
        {basket.map((item) => {
                console.log("item: ",item)
              return (<BasketItem handleClick={handleClick} item={item} key={item._id}/>)
        })}
        <h4 className='Basket-subtotal'>SUBTOTAL: <span>£{subtotal}</span></h4>
        <NavLink to="/checkout" state={{subtotal: subtotal}}><button className='Basket-checkout'>Checkout</button></NavLink>
        </div>
    //okay so what does a basket need, it needs a list of everything that's been added to it and probably therefor a component for each item
    //{propsobjectlinkgoeshere.map((e) =>{
    //return (<BasketItem listingIDofsomesort={e}/>)    
    //})}
  )
}

export default Basket