import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import discogs from "../../utils/discogsService"

import ImageViewer from '../../components/ImageViewer/ImageViewer'
import "./ArtistPage.css"

function ArtistPage() {

    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState({})

    const { id } = useParams();

    function isObjectPopulated(value) {
        return !(Object.keys(value).length === 0 && value.constructor === Object);
    }

    useEffect(() => {
        async function getResult() {
            const data = await discogs.getArtistById(id) 
            setResult({...data})
        }
        getResult()
    }, [id])    
    
    return (
      <div className='ArtistPage'>
          <div className='ArtistPage-pageControl'>
              <span className="material-symbols-outlined" onClick={() => (navigate(-1))}>arrow_back</span>
              <div className='ArtistPage-favourite'><span className="material-symbols-outlined">favorite</span></div>
          </div>
          {isObjectPopulated(result) ? (
          <div className='ArtistPage-productContainer'>
              <div className='ArtistPage-productInfo' onClick={() => (setOpen(!open))}>
                  <h1>{result.name}</h1>
                  <h2>{`(${result.realname})`}</h2>
                  {open ? <p className='open'>{result.profile}</p> : <p className='closed'>{result.profile}</p>}                
              </div>    
              <ImageViewer images={result.images}/>
          </div>
          ) : <></>}
      </div>
    )

}

export default ArtistPage