import React from 'react'
import FilterBar from '../FilterBar/FilterBar'
import SearchBar from '../SearchBar/SearchBar'
import "./Search.css"

function Search() {
  return (
    <div className='Search'>
        <FilterBar />
        <SearchBar />
    </div>
  )
}

export default Search