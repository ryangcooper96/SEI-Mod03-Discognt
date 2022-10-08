import React from 'react'
import './Security.css'
import { useState } from 'react'

function Security() {
//   return (
//       <div>        
//         <form>
//           <input type='text' placeholder='email'></input>
//           <input type='text' placeholder='confirm email'></input>
//           <input type='text' placeholder='password'></input>
//           <input type='text' placeholder='confirm password'></input>
//           <button>submit</button>
//       </form>   </div>
//   )
    const [state, setState] = useState({
        email: '',
        emailConfirm: '',
        password: '',
        passwordConfirm: ''
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
                    <div className='creditcard-wrapper'>
                        <input type='text' placeholder='email' value={state.email} onChange={handleChange} name='email'></input>
                        <input type='text' placeholder='confirm email' value={state.emailConfirm} onChange={handleChange} name='emailConfirm'></input>
                        <input type='text' placeholder='password' value={state.password} onChange={handleChange} name='password'></input>
                        <input type='text' placeholder='billing address line 1' value={state.passwordConfirm} onChange={handleChange} name='passwordConfirm'></input>

                        <button>submit</button></div>
            </form>
        </div>
    )
}


export default Security