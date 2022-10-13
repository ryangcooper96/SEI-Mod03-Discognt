import React, { useState, useEffect } from 'react'
import "./SearchBar.css"

function SearchBar( { query, setQuery, setPageNum } ) {

    const [open, setOpen] = useState(false)
    const handleClick = () => {setOpen(!open)}

    const handleChange = (e) => {
        setQuery(e.target.value)
        setPageNum(1)
    };  

  return (
    <div className='SearchBar'>
        { open ? <input className="SearchBar-input" type="text" placeholder='Search.' value={query} onChange={handleChange}></input> : <></>}
        <button className='SearchBar-button' onClick={handleClick}><span className="material-symbols-outlined">search</span></button>
    </div>
  )
}

export default SearchBar