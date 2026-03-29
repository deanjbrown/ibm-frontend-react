import { useEffect, useState } from "react";

// Custom hook to fetch data from an API
const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  },[url]);

  return data;
};

export default useFetch;
