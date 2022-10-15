import React from "react";
import "./Checkout.css"


import { PaymentElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    return (
        <div className="stripe-wrapper">
        <form className="stripeForm">
            <PaymentElement />
            <button id="stripeSubmit">Submit</button>
        </form>
        </div>
    );
};

export default CheckoutForm
