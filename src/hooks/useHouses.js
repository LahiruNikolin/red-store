import React, { useEffect, useState } from "react";

function useHouses() {
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://iqaccbyrzi.execute-api.ap-southeast-1.amazonaws.com/default/getHouseInfo`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((e) => setError(e));
  }, []);

  useEffect(() => {});
  return { movies, loading, error };
}

export default useHouses;
