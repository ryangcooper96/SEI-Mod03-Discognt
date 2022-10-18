import React from 'react'
import { Link } from "react-router-dom"
import "./ResultCard.css"


function ResultCard( { result, location }) {
  return (
    <div className='ResultCard'>
        <div className='ResultCard-favourite'><span className="material-symbols-outlined">favorite</span></div>
        <Link to={`/${location}/${result.id}`}>
        <div className='ResultCard-content'>
            <div className='ResultCard-image'>
                <img src={result.cover_image ? result.cover_image : result.images[0].resource_url} alt={result.title}/>
            </div>
            <div className='ResultCard-text'>
                {result.artists ? <h2>{result.artists[0].name}</h2> : null}
                {result.artists ? <h3>{result.title}</h3> : <h3>{result.title}</h3> }

            </div>
        </div>
        </Link>
    </div>
  )
}

export default ResultCard