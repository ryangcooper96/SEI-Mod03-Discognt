import React from 'react'
import Results from '../../components/Results/Results'
// import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import "./ArtistsPage.css"

function ArtistsPage() {

  
  return (
    <div className='ArtistsPage'>
        <div className='ArtistsPage-title'>
            <h1>Artists</h1>
            <p>Explore all of the world's artists... </p>
        </div>
        {/* <BreadCrumbs /> */}
        <Results type={"artists"} location={"artists"}/>
    </div>
  )
}

export default ArtistsPage

