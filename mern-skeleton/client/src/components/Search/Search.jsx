import React from 'react'
import FilterBar from '../FilterBar/FilterBar'
import SearchBar from '../SearchBar/SearchBar'
import "./Search.css"

function Search( { query, setQuery, setPageNum } ) {
  return (
    <div className='Search'>
        <FilterBar />
        <SearchBar query={query} setQuery={setQuery} setPageNum={setPageNum}/>
    </div>
  )
}

export default Search