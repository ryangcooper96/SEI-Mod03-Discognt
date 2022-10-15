import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import discogs from "../../utils/discogsService"

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import ImageViewer from '../../components/ImageViewer/ImageViewer'
import Tracklist from '../../components/Tracklist/Tracklist'
import Listings from "../../components/Listings/Listings"
import "./ProductPage.css"

function ProductPage() {

    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState({})

    const { id } = useParams();

    useEffect(() => {
        async function getResult() {
            console.log(id)
            const data = await discogs.getAlbumById(id) 
            console.log(data)
            setResult({...data})
        }
        getResult()
    })    
    
    return (
      <div className='ProductPage'>
          <div className='ProductPage-pageControl'>
              <span className="material-symbols-outlined" onClick={() => (navigate(-1))}>arrow_back</span>
              {/* <BreadCrumbs /> */}
              <div className='ProductPage-favourite'><span className="material-symbols-outlined">favorite</span></div>
          </div>
          {result ? (
          <div className='ProductPage-productContainer'>
              <div className='ProductPage-productInfo' onClick={() => (setOpen(!open))}>
                  <h1>{result.title}</h1>
                  {console.log(result.artists)}
                  <h2>{result.artists_sort}</h2>
                  <h3>{result.released_formatted ? result.released_formatted : result.year} </h3>
                  {console.log(result.labels)}
                  {/* <h3>{result.labels.map((label) => (label.name))}</h3> */}
                  <h3>{result.labels[0].name ? result.labels[0].name : null}</h3>
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

export default ProductPage