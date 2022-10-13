import React from 'react'
import { Link } from "react-router-dom"
import "./ResultCard.css"


function ResultCard( { result }) {
  return (
    <div className='ResultCard'>
        <div className='ResultCard-favourite'><span className="material-symbols-outlined">favorite</span></div>
        <Link to={`/marketplace/${result.id}`}>
        <div className='ResultCard-content'>
            <div className='ResultCard-image'>
                <img src={result.cover_image} alt={result.title}/>
            </div>
            <div className='ResultCard-text'>
                {/* <h2>{result.title}</h2> */}
                <h3>{result.title}</h3>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default ResultCard