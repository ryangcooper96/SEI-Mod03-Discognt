import React from 'react'
import Search from '../Search/Search'
import ResultCard from '../ResultCard/ResultCard'
import "./Results.css"
import discogs from "../../utils/discogsService"
import { useState, useEffect, useRef } from 'react'
import { useCallback } from 'react'

function Results() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const [maxPageNum, setMaxPageNum] = useState(1);
  const loader = useRef(null);
      
  const getResults = useCallback( async () => {
    setIsLoaded(false)
    await discogs.searchDatabase({
      type: "master",
      query: query,
      page: pageNum,
      per_page: 20,
    })
    .then(
      (data) => {
        setIsLoaded(true);
        if (pageNum === 1) {
          setResults(data.results);
        } else {
          setResults((prev) => [...prev, ...data.results]);
        }
        console.log(data)
        setMaxPageNum(data.pagination.pages)
        // setPageNum(1);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [query, pageNum])
  
  useEffect(() => {
    console.log("calll me")
    // timeout function waits until user has finished typing to make request
    // https://stackoverflow.com/questions/42217121/how-to-start-search-only-when-user-stops-typing
    const delayDebounceFn = setTimeout(() => {
      getResults()
        
    }, 1000)
  
    // return () => clearTimeout(delayDebounceFn)

  }, [query, pageNum])

  // async function getMoreResults() {
  //   const newPage = pageNum + 1;
  //   setPageNum(newPage);
  //   setIsLoaded(false);
  //   await discogs.searchDatabase({
  //         type: "master",
  //         query: query,
  //         page: newPage,
  //         per_page: 20,
  //       })
  //     .then(
  //         (data) => {
  //           setIsLoaded(true);
  //           setResults((prev) => [...prev, ...data.results]);
  //         },
  //         (error) => {
  //           setIsLoaded(true);
  //           setError(error);
  //         }
  //       )
  // }

  
  useEffect(() => {
    function handleObserver(entries) {
      if (pageNum === maxPageNum) { return }
      const [target] = entries;
      if (target.isIntersecting && isLoaded) {
        setPageNum((prev) => prev + 1)
      }
    };
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [loader]);  


  if (error) {
    return (<div className='Results'>
              <Search query={query} setQuery={setQuery} setPageNum={setPageNum}/>
              <div className='Results-list'>
                Error: {error.message}
              </div>
            </div>);
  } else {
    return (<div className='Results'>
              <Search query={query} setQuery={setQuery} setPageNum={setPageNum}/>
              <div className='Results-list'>
                {results.map((result) => (<ResultCard result={result} key={result.id}/>))}
                {/* {!isLoaded && <div>Loading</div>} */}
              </div>
              <div ref={loader}></div>
            </div>);
  }

}

export default Results