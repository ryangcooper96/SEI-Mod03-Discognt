import React, { useState} from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import listingService from '../../../../utils/listingService'
import discogs from "../../../../utils/discogsService"

function NewListing() {

  const [listing, setListing] = useState({
    albumId: 0,
    title: '',
    format: '',
    condition: '',
    price: 0,
    description: '',
  })

  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    async function getAlbum() {
      const album = await discogs.getAlbumById(id)
      setListing((prev) => ({...prev, albumId: album.id, title: album.title}))
    }
    getAlbum()
  }, [])  

    const handleChange = (e) => {
        // updateMessage('');
        setListing((oldState) => ({
            ...oldState,
            // Using ES2015 Computed Property Names
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await listingService.createListing(listing);
            // await userService.signup(state);
            // Let <App> know a user has signed up!
            // handleSignupOrLogin();
            // Successfully signed up - show GamePage
            // navigate('/');
        } catch (err) {
            // Invalid user data (probably duplicate email)
            // updateMessage(err.message);
        }
    }

  return (
    <div className='NewListing'>
      NewListing
          <form className="form-horizontal" onSubmit={handleSubmit} >
              <div className="form-group">
                  <div className="col-sm-12">
                      <input type="text" className="form-control" placeholder="Format" value={listing.format} name="format" onChange={handleChange} />
                  </div>
              </div>
              <div className="form-group">
                  <div className="col-sm-12">
                      <input type="text" className="form-control" placeholder="Condition" value={listing.condition} name="condition" onChange={handleChange} />
                  </div>
              </div>
              <div className="form-group">
                  <div className="col-sm-12">
                      <input type="number" className="form-control" placeholder="Price" value={listing.price} name="price" onChange={handleChange} />
                  </div>
              </div>
              <div className="form-group">
                  <div className="col-sm-12">
                      <textarea type="text" className="form-control" placeholder="Description" value={listing.description} name="description" onChange={handleChange} />
                  </div>
              </div>

              <div className="form-group">
                  <div className="col-sm-12 text-center">
                      <button className="btn btn-default">Create Listing</button>&nbsp;&nbsp;
                      <Link to='/'>Cancel</Link>
                  </div>
              </div>
          </form>
    </div>
  )
}

export default NewListing