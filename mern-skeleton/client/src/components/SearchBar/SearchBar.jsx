import React from 'react'
import "./SearchBar.css"

function SearchBar() {
  return (
    <div className='SearchBar'>
        <input className="SearchBar-input" type="text" placeholder='Search.'></input>
        <button className='SearchBar-button'><span className="material-symbols-outlined">search</span></button>
    </div>
  )
}

export default SearchBar