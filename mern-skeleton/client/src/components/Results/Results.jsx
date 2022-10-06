import React from 'react'
import Search from '../Search/Search'
import ResultCard from '../ResultCard/ResultCard'
import "./Results.css"

function Results() {
  return (
    <div className='Results'>
        <Search />
        <div className='Results-list'>
            <ResultCard />
            <ResultCard />
            <ResultCard />
        </div>
    </div>
  )
}

export default Results