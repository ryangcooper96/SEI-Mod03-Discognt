import React from 'react'
import FilterBar from '../FilterBar/FilterBar'
import SearchBar from '../SearchBar/SearchBar'
import "./Search.css"

function Search( { query, setQuery } ) {
  return (
    <div className='Search'>
        <FilterBar />
        <SearchBar query={query} setQuery={setQuery}/>
    </div>
  )
}

export default Search