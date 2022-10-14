import React from 'react'
import Search from '../Search/Search'
import ResultCard from '../ResultCard/ResultCard'
import "./Results.css"
import discogs from "../../utils/discogsService"
import { useState, useEffect, useRef } from 'react'
import { useCallback } from 'react'

function Results() {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([])

  
  useEffect(() => {

    setLoading(true);

    async function getResults() {
      await discogs.searchDatabase({
        type: "master",
        query: query,
        page: page,
        per_page: 20,
      })
      .then(
        (data) => {
          // setResults((prev) => [...prev, ...data.results]);
          setResults([...data.results]);
          setPages(data.pagination);
            setLoading(false)
          },
          (error) => {
            setError(true);
            setLoading(false)
          }
        )
    }

    const delayDebounceFn = setTimeout(() => {
      getResults() 
    }, 650)
  
    return () => clearTimeout(delayDebounceFn)

  }, [query, page])  
  
  if (error) {
    return (<div className='Results'>
              <Search query={query} setQuery={setQuery} setPageNum={setPage}/>
              <div className='Results-list'>
                Error: {error.message}
              </div>
            </div>);
  } else {
    return (<div className='Results'>
              <Search query={query} setQuery={setQuery} setPageNum={setPage}/>
              {results.length ? <div className='Results-pagination'>
                {pages.page -3 > 0 ? <button className='third active' onClick={() => (setPage((prev) => (prev - 3)))}>{pages.page - 3}</button> : <button className='third'></button>}
                {pages.page -2 > 0 ? <button className='second active' onClick={() => (setPage((prev) => (prev - 2)))}>{pages.page - 2}</button> : <button className='second'></button>}
                {pages.page -1 > 0 ? <button className='first active' onClick={() => (setPage((prev) => (prev - 1)))}>{pages.page - 1}</button> : <button className='first'></button>}
                <button className='centre active'>{pages.page}</button>
                {pages.page + 1 < pages.pages ? <button className='first active' onClick={() => (setPage((prev) => (prev + 1)))}>{pages.page + 1}</button> : <button className='first'></button>}
                {pages.page + 2 < pages.pages ? <button className='second active' onClick={() => (setPage((prev) => (prev + 2)))}>{pages.page + 2}</button> : <button className='second'></button>}
                {pages.page + 3 < pages.pages ? <button className='third active' onClick={() => (setPage((prev) => (prev + 3)))}>{pages.page + 3}</button> : <button className='third'></button>}
              </div> : <></>}
              <div className='Results-list'>
                {results.map((result) => (<ResultCard result={result} key={result.id}/>))}
                {loading && <div className='Results-loading'>Loading</div>}
              </div>
              {results.length ? <div className='Results-pagination'>
                {pages.page -3 > 0 ? <button className='third active' onClick={() => (setPage((prev) => (prev - 3)))}>{pages.page - 3}</button> : <button className='third'></button>}
                {pages.page -2 > 0 ? <button className='second active' onClick={() => (setPage((prev) => (prev - 2)))}>{pages.page - 2}</button> : <button className='second'></button>}
                {pages.page -1 > 0 ? <button className='first active' onClick={() => (setPage((prev) => (prev - 1)))}>{pages.page - 1}</button> : <button className='first'></button>}
                <button className='centre active'>{pages.page}</button>
                {pages.page + 1 < pages.pages ? <button className='first active' onClick={() => (setPage((prev) => (prev + 1)))}>{pages.page + 1}</button> : <button className='first'></button>}
                {pages.page + 2 < pages.pages ? <button className='second active' onClick={() => (setPage((prev) => (prev + 2)))}>{pages.page + 2}</button> : <button className='second'></button>}
                {pages.page + 3 < pages.pages ? <button className='third active' onClick={() => (setPage((prev) => (prev + 3)))}>{pages.page + 3}</button> : <button className='third'></button>}
              </div> : <></>}
            </div>);
  }


  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [results, setResults] = useState([]);
  // const [query, setQuery] = useState('');
  // const [pageNum, setPageNum] = useState(1);
  // const [maxPageNum, setMaxPageNum] = useState(1);
  // const loader = useRef(null);
      
  // const getResults = useCallback( async () => {
  //   setIsLoaded(false)
  //   await discogs.searchDatabase({
  //     type: "master",
  //     query: query,
  //     page: pageNum,
  //     per_page: 20,
  //   })
  //   .then(
  //     (data) => {
  //       setIsLoaded(true);
  //       if (pageNum === 1) {
  //         setResults(data.results);
  //       } else {
  //         setResults((prev) => [...prev, ...data.results]);
  //       }
  //       console.log(data)
  //       setMaxPageNum(data.pagination.pages)
  //       // setPageNum(1);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, [query, pageNum])
  
  // useEffect(() => {
  //   // timeout function waits until user has finished typing to make request
  //   // https://stackoverflow.com/questions/42217121/how-to-start-search-only-when-user-stops-typing
  //   const delayDebounceFn = setTimeout(() => {
  //     getResults()
        
  //   }, 1000)
  
  //   return () => clearTimeout(delayDebounceFn)

  // }, [query, pageNum])
  
  // useEffect(() => {
  //   function handleObserver(entries) {
  //     if (pageNum === maxPageNum) { return }
  //     const [target] = entries;
  //     if (target.isIntersecting && isLoaded) {
  //       setPageNum((prev) => prev + 1)
  //     }
  //   };
  //   const option = {
  //     root: null,
  //     rootMargin: "20px",
  //     threshold: 0
  //   };
  //   const observer = new IntersectionObserver(handleObserver, option);
  //   if (loader.current) observer.observe(loader.current);
  // }, [loader]);  


  // if (error) {
  //   return (<div className='Results'>
  //             <Search query={query} setQuery={setQuery} setPageNum={setPageNum}/>
  //             <div className='Results-list'>
  //               Error: {error.message}
  //             </div>
  //           </div>);
  // } else {
  //   return (<div className='Results'>
  //             <Search query={query} setQuery={setQuery} setPageNum={setPageNum}/>
  //             <div className='Results-list'>
  //               {results.map((result) => (<ResultCard result={result} key={result.id}/>))}
  //               {/* {!isLoaded && <div>Loading</div>} */}
  //             </div>
  //             <div ref={loader}></div>
  //           </div>);
  // }

}

export default Results