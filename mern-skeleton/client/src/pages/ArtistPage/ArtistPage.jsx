import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import discogs from "../../utils/discogsService"
import useUser from '../../hooks/useUser'

import ImageViewer from '../../components/ImageViewer/ImageViewer'
import Tracklist from '../../components/Tracklist/Tracklist'
import Listings from "../../components/Listings/Listings"
import "./ArtistPage.css"

function ArtistPage() {

    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState({})
    // const { user } = useUser()
    // console.log(user)

    const { id } = useParams();

    function isObjectPopulated(value) {
        return !(Object.keys(value).length === 0 && value.constructor === Object);
    }

    useEffect(() => {
        async function getResult() {
            const data = await discogs.getAlbumById(id) 
            setResult({...data})
        }
        getResult()
    }, [id])    
    
    return (
      <div className='ArtistPage'>
          <div className='ArtistPage-pageControl'>
              <span className="material-symbols-outlined" onClick={() => (navigate(-1))}>arrow_back</span>
              {/* <BreadCrumbs /> */}
              <div className='ArtistPage-favourite'><span className="material-symbols-outlined">favorite</span></div>
          </div>
          {isObjectPopulated(result) ? (
          <div className='ArtistPage-productContainer'>
              <div className='ArtistPage-productInfo' onClick={() => (setOpen(!open))}>
                  <h1>{result.title}</h1>
                  {result.artists.map((artist) => {return <h2>{artist.name}</h2>})}
                  <h3>{result.released_formatted ? result.released_formatted : result.year} </h3>
                  {result.labels ? (<h3>{result.labels[0].name}</h3>) : null}
                  {open ? <p className='open'>{result.notes}</p> : <p className='closed'>{result.notes}</p>}                
              </div>    
              <Tracklist tracklist={result.tracklist} />
              <ImageViewer images={result.images}/>
              <Listings releaseId={result.id}/>
          </div>
          ) : <></>}
      </div>
    )

}

export default ArtistPage