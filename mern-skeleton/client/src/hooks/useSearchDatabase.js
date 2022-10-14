import { useState, useEffect, useCallback } from "react";
import discogs from "../utils/discogsService";

function useFetch(query, page) {
  const [loading, setLoading] = useState(true);
  const [errorVar, setError] = useState(false);
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNum, setPageNum] = useState(1);

  const sendQuery = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      await discogs
        .searchDatabase({
          type: "master",
          query: search,
          page: pageNum,
          per_page: 20,
        })
        .then((res) => {
          setList((prev) => [...prev, ...res.results]);
          setLoading(false);
        });
    } catch (err) {
      setError(err);
    }
  }, [search, pageNum]);

  useEffect(() => {
    sendQuery(query);
  }, [search, sendQuery, pageNum]);

  return { loading, errorVar, list };
}

export default useFetch;
