import React, { useState } from 'react'
import "./ImageViewer.css"

// function ImageViewer( { images } ) {
function ImageViewer( { images } ) {

  const [primaryImage, setPrimaryImage] = useState(images[0].resource_url)
  const [additionalImages] = useState([...images.map((image) => (image.resource_url))])

  function handleNewSelection (e) {
    setPrimaryImage(e.target.src)
  }

  return (
    <div className="ImageViewer">
      <div className="ImageViewer-mainImageContainer">
        <img  src={primaryImage} alt=""/>
      </div>
      <div className="ImageViewer-additionalImageContainer">
        {additionalImages.map((url, index) => {
          if (primaryImage === url) {
            return (<img className='selected' src={url} alt="" onClick={handleNewSelection} key={index}/>)
          } else {
            return (<img src={url} alt="" onClick={handleNewSelection} key={index}/>)
          }
        })}
      </div>
    </div>
  )
}

export default ImageViewer