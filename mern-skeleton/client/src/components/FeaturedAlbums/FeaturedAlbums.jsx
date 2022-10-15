import React, { useState } from 'react'
import "./FeaturedAlbums.css"
import ResultCard from "../ResultCard/ResultCard"

function FeaturedAlbums() {

  const featured = [
    {},
    {},
    {},
  ];

  return (
      <div className='featured-wrapper'>
        <h3>Featured Albums</h3>
        <div className='cover-wrapper'>
          {featured.map((result) => (<ResultCard result={result} key={result.id}/>))}
        </div>
    </div>
  )
}

export default FeaturedAlbums