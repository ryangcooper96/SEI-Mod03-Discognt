import React, { useState } from 'react'
import "./SearchBar.css"

function SearchBar( { query, setQuery } ) {

    const [open, setOpen] = useState(false)
    const handleClick = () => {setOpen(!open)}

    const handleChange = (e) => {
      if(e.target.value) {
        setQuery(e.target.value)
      } else {
        setQuery(undefined)
      }
    };

  return (
    <div className='SearchBar'>
        { open ? <input className="SearchBar-input" type="text" placeholder='Search.' value={query} onChange={handleChange}></input> : <></>}
        <button className='SearchBar-button' onClick={handleClick}><span className="material-symbols-outlined">search</span></button>
    </div>
  )
}

export default SearchBar