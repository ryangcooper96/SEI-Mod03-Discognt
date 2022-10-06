import React from 'react'
import Results from '../../components/Results/Results'
import "./Marketplace.css"

function Marketplace() {
  return (
    <div className='Marketplace'>
        <div className='Marketplace-title'>
            <h1>Marketplace</h1>
            <p>Find exactly what you're looking for in our marketplace... </p>
        </div>
        <Results />
    </div>
  )
}

export default Marketplace

