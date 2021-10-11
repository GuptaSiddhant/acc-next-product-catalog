import { useState, useEffect } from "react";

export default function useQuery(path) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/" + path)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [path]);

  return [data, { loading }];
}
