import React from 'react'
import "./FeaturedAlbums.css"
import ResultCard from "../ResultCard/ResultCard"
import discogs from '../../utils/discogsService'
import { useEffect, useState } from 'react'

function FeaturedAlbums() {

  const featured = [ 60722, 191288, 18479]
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    Promise.all(
        featured.map(async (id) => {
            const item = await discogs.getAlbumById(id)
            return item
        })
    ).then((data) => {
        setAlbums([...data])
    })
  }, [])

  return (
      <div className='FeaturedAlbums'>
        <h2 className='FeaturedAlbums-title'>Featured Albums</h2>
        <div className='FeaturedAlbums-resultCards'>
          {albums.map((result) => (<ResultCard result={result} key={result.id}/>))}
        </div>
    </div>
  )
}

export default FeaturedAlbums