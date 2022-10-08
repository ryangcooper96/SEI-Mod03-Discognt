import React from 'react'
import './Security.css'

function Security() {
  return (
      <div>        
        <form>
          <input type='text' placeholder='email'></input>
          <input type='text' placeholder='confirm email'></input>
          <input type='text' placeholder='password'></input>
          <input type='text' placeholder='confirm password'></input>
          <button>submit</button>
      </form>   </div>
  )
}

export default Security