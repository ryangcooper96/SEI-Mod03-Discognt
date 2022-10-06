import React from 'react'
import "./ResultCard.css"

function ResultCard() {
  return (
    <div className='ResultCard'>
        <div className='ResultCard-favourite'><span className="material-symbols-outlined">favorite</span></div>
        <div className='ResultCard-content'>
            <div className='ResultCard-image'>
                <img src="" alt="blah"/>
            </div>
            <div className='ResultCard-text'>
                <h2>Oasis</h2>
                <h3>Wonderwall</h3>
            </div>
        </div>
    </div>
  )
}

export default ResultCard