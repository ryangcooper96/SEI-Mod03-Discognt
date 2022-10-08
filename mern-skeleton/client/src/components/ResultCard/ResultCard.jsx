import React from 'react'
import { Link } from "react-router-dom"
import "./ResultCard.css"

function ResultCard() {
  return (
    <div className='ResultCard'>
        <div className='ResultCard-favourite'><span className="material-symbols-outlined">favorite</span></div>
        <Link to="/marketplace/product">
        <div className='ResultCard-content'>
            <div className='ResultCard-image'>
                <img src="https://www.nme.com/wp-content/uploads/2016/10/DefinitelyMaybeOasis2PR200712_0.jpg" alt="blah"/>
            </div>
            <div className='ResultCard-text'>
                <h2>Oasis</h2>
                <h3>Definitely Maybe</h3>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default ResultCard