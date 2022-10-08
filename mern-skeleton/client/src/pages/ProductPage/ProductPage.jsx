import React from 'react'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import ImageViewer from '../../components/ImageViewer/ImageViewer'
import Tracklist from '../../components/Tracklist/Tracklist'
import "./ProductPage.css"

function ProductPage() {
  return (
    <div className='ProductPage'>
        <BreadCrumbs />
        <div className='ProductPage-productContainer'>
            <div className='ProductPage-productInfo'>
                <h1>Product Title</h1>
                <h2>Artist</h2>
                <h3>Release Date: 1996</h3>
                <h3>Record Label</h3>
                <p>Find exactly what you're looking for in our marketplace... </p>
            </div>    
            <ImageViewer />
            <Tracklist />
            <div className='Listings'></div>
        </div>
    </div>
  )
}

export default ProductPage