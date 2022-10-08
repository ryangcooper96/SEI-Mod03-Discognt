import React from 'react'
import './Billing.css'
import {useState} from 'react'

function Billing() {
    const [state, setState] = useState({
        paymentMethod: '',
        nameOnCard: '',
        cardNumber: '',
        securityCode: '',
        address1: '',
        address2: '',
        address3: '',
        postcode: '',
    });
    function handleChange(e) {
        setState((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value
        })
        )
    }
  return (
      <div>   
        <form>
              <select onChange={handleChange} value={state.paymentMethod} name='paymentMethod'>
                <option value="">--Payment Method--</option>
                <option value="visa">Visa</option>
                <option value="mastercard">Mastercard</option>
                <option value="paypal">PayPal</option>
                </select>
{/* Okay this one here needs to be a dropdown to pick from a set of options, fix that */}
{state.paymentMethod !== 'paypal' ? 
                  (<div className='creditcard-wrapper'><input type='text' placeholder='Name on card' value={state.nameOnCard} onChange={handleChange} name='nameOnCard'></input>
                      <input type='text' placeholder='card number' value={state.cardNumber} onChange={handleChange} name='cardNumber'></input>
                      <input type='text' placeholder='security code' value={state.securityCode} onChange={handleChange} name='securityCode'></input>
                      <input type='text' placeholder='billing address line 1' value={state.address1} onChange={handleChange} name='address1'></input>
                      <input type='text' placeholder='billing address line 2' value={state.address2} onChange={handleChange} name='address2'></input>
                      <input type='text' placeholder='billing address line 3' value={state.address3} onChange={handleChange} name='address3'></input>
                      <input type='text' placeholder='billing address zip/postal code' value={state.postcode} onChange={handleChange} name='postcode'></input>
              
            <button>submit</button></div>) :
            (<button>submit</button>)
            }
        </form>   
        </div>
  )
}

export default Billing