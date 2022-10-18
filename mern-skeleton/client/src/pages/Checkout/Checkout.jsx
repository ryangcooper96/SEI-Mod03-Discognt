import React from "react";
import "./Checkout.css"
import { useLocation } from "react-router-dom";


import { PaymentElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const location = useLocation();
    const { subtotal } = location.state;
    console.log('the subtotal passed in is' + subtotal)
    return (
        <div className="checkout-wrapper">
            <h2>Checkout</h2>
            <hr></hr>
            <div className="stripe-wrapper">
                <h3>Total: £{subtotal}</h3>
                <form className="stripeForm">

                    <PaymentElement className="payment-element" />
                    <button id="stripeSubmit"><span>Submit</span></button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm
