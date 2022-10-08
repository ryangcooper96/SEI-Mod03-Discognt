import React from 'react'
import { useNavigate } from 'react-router-dom'

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import ImageViewer from '../../components/ImageViewer/ImageViewer'
import Tracklist from '../../components/Tracklist/Tracklist'
import Listings from "../../components/Listings/Listings"
import "./ProductPage.css"

function ProductPage() {

    const navigate = useNavigate()

  return (
    <div className='ProductPage'>
        <div className='ProductPage-pageControl'>
            <span className="material-symbols-outlined" onClick={() => (navigate(-1))}>arrow_back</span>
            <BreadCrumbs />
        </div>
        <div className='ProductPage-productContainer'>
            <div className='ProductPage-productInfo'>
            <div className='ProductPage-favourite'><span className="material-symbols-outlined">favorite</span></div>
                <h1>Product Title</h1>
                <h2>Artist</h2>
                <h3>Release Date: 1996</h3>
                <h3>Record Label</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum architecto obcaecati perspiciatis maxime velit omnis! Neque, accusantium porro, voluptatem accusamus dolorum doloremque repellat iure laborum nisi exercitationem quo fugiat adipisci.</p>
            <Tracklist />
            </div>    
            <ImageViewer />
            <Listings />
        </div>
    </div>
  )
}

export default ProductPage