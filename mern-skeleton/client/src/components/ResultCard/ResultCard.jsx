import React from 'react'
import { Link } from "react-router-dom"
import "./ResultCard.css"

function ResultCard( { album }) {
  return (
    <div className='ResultCard'>
        <div className='ResultCard-favourite'><span className="material-symbols-outlined">favorite</span></div>
        <Link to="/marketplace/product">
        <div className='ResultCard-content'>
            <div className='ResultCard-image'>
                <img src={album.cover_image} alt={album.title}/>
            </div>
            <div className='ResultCard-text'>
                <h2>{album.artist}</h2>
                <h3>{album.title}</h3>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default ResultCard