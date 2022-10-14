import React, { useState } from 'react'
import "./ImageViewer.css"

// function ImageViewer( { images } ) {
function ImageViewer( { images } ) {

  const [primaryImage, setPrimaryImage] = useState(images[0].resource_url)
  const [additionalImages] = useState([...images.map((image) => (image.resource_url))])

  console.log(images)
  function handleNewSelection (e) {
    setPrimaryImage(e.target.src)
  }

  return (
    <div className="ImageViewer">
      <div className="ImageViewer-mainImageContainer">
        <img  src={primaryImage} alt=""/>
        {/* <img  src="https://www.nme.com/wp-content/uploads/2016/10/DefinitelyMaybeOasis2PR200712_0.jpg" alt=""/> */}
      </div>
      <div className="ImageViewer-additionalImageContainer">
          {/* <img  src="https://www.nme.com/wp-content/uploads/2016/10/DefinitelyMaybeOasis2PR200712_0.jpg" alt=""/>
          <img  src="https://www.nme.com/wp-content/uploads/2016/10/DefinitelyMaybeOasis2PR200712_0.jpg" alt=""/>
          <img  src="https://www.nme.com/wp-content/uploads/2016/10/DefinitelyMaybeOasis2PR200712_0.jpg" alt=""/> */}
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