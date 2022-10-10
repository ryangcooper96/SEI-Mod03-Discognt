import React, { useState } from 'react'
import "./SearchBar.css"

function SearchBar() {

    const [open, setOpen] = useState(false)
    const handleClick = () => {setOpen(!open)}
    
    // The state below will need lifting
    const [search, setSearch] = useState('')
    const handleChange = (e) => {setSearch(e.target.value)}

  return (
    <div className='SearchBar'>
        { open ? <input className="SearchBar-input" type="text" placeholder='Search.' onChange={handleChange}></input> : <></>}
        <button className='SearchBar-button' onClick={handleClick}><span className="material-symbols-outlined">search</span></button>
    </div>
  )
}

export default SearchBar