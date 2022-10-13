import React from 'react'
import Search from '../Search/Search'
import ResultCard from '../ResultCard/ResultCard'
import "./Results.css"
import discogs from "../../utils/discogsService"
import { useState, useEffect } from 'react'

function Results() {

  // FIRST ATTEMPT

  // const [results, setResults] = useState([])
  // const [query, setQuery] = useState(undefined);

  // async function searchReleases(query) {
  //   setResults([])
  //   let data = await discogs.searchForReleases(query)
  //   console.log(data)
  //   // setResults((prev) => ([...prev, ...data]))
  //   setResults([...data]);
  // }

  // useEffect(() => {
  //   searchReleases()
  // }, [])

  // useEffect(() => {
  //     searchReleases(query)
  // }, [query])

  // return (
  //           <div className='Results'>
  //             <Search query={query} setQuery={setQuery}/>
  //             <div className='Results-list'>
  //               {results.map((result) => (<ResultCard album={result} key={result.id}/>))}
  //             </div>
  //           </div>
  //         );  


  // SECOND ATTEMPT

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
      
  useEffect(() => {
    async function getResults() {
      await discogs.searchForReleases((query ? query : undefined))
        .then(
          (result) => {
            setIsLoaded(true);
            setResults(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }
    // timeout function waits until user has finished typing to make request
    // https://stackoverflow.com/questions/42217121/how-to-start-search-only-when-user-stops-typing
    const delayDebounceFn = setTimeout(() => {
      console.log(query)
      getResults()
        
    }, 1000)
  
    return () => clearTimeout(delayDebounceFn)

  }, [query])

  if (error) {
    return (<div className='Results'>
              <Search query={query} setQuery={setQuery}/>
              <div className='Results-list'>
                Error: {error.message}
              </div>
            </div>);
  } else if (!isLoaded) {
    return (<div className='Results'>
              <Search query={query} setQuery={setQuery}/>
              <div className='Results-list'>
                Loading...
              </div>
            </div>);
  } else {
    return (<div className='Results'>
              <Search query={query} setQuery={setQuery}/>
              <div className='Results-list'>
                {results.map((result) => (<ResultCard album={result} key={result.id}/>))}
              </div>
            </div>);
  }

}

export default Results