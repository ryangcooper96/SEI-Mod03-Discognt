import React from "react";
import "./Checkout.css"
import { useLocation } from "react-router-dom";


import { PaymentElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const location = useLocation();
    const{subtotal} = location.state;
    console.log('the subtotal passed in is' + subtotal)
    return (
        <div className="stripe-wrapper">
        <form className="stripeForm">
            Subtotal: £{subtotal}
            <PaymentElement />
            <button id="stripeSubmit">Submit</button>
        </form>
        </div>
    );
};

export default CheckoutForm
