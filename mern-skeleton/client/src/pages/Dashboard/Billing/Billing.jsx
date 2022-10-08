import React from 'react'
import './Billing.css'

function Billing() {
    const billingtype = 'paypal';
  return (
      <div>   
        <form>
              <select>
                <option value="">--Payment Method--</option>
                <option value="visa">Visa</option>
                <option value="mastercard">Mastercard</option>
                <option value="paypal">PayPal</option>
                </select>
{/* Okay this one here needs to be a dropdown to pick from a set of options, fix that */}
{billingtype !== 'paypal' ? 
              (<div className='creditcard-wrapper'><input type='text' placeholder='Name on card'></input>
            <input type='text' placeholder='card number'></input>
            <input type='text' placeholder='security code'></input>
              <input type='text' placeholder='billing address line 1'></input>
              <input type='text' placeholder='billing address line 2'></input>
              <input type='text' placeholder='billing address line 3'></input>
              <input type='text' placeholder='billing address zip/postal code'></input>
              
            <button>submit</button></div>) :
            (<button>submit</button>)
            }
        </form>   
        </div>
  )
}

export default Billing