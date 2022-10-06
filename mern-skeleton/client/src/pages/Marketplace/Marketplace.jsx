import React from 'react'
import Results from '../../components/Results/Results'
import Search from '../../components/Search/Search'
import "./Marketplace.css"

function Marketplace() {
  return (
    <div className='Marketplace'>
        <div>
            <h1>Marketplace</h1>
            <p>Find exactly what you're looking for in our marketplace... </p>
        </div>
        <Search />
        <Results />
    </div>
  )
}

export default Marketplace

