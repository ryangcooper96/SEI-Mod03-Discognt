import React, { useState } from 'react'
import "./SearchBar.css"



function SearchBar() {

    const [open, setOpen] = useState(false)

    const handleClick = () => {setOpen(!open)}

  return (
    <div className='SearchBar'>
        { open ? <input className="SearchBar-input" type="text" placeholder='Search.'></input> : <></>}
        <button className='SearchBar-button' onClick={handleClick}><span className="material-symbols-outlined">search</span></button>
    </div>
  )
}

export default SearchBar