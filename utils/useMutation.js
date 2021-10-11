import { useState, useCallback } from "react";

export default function useMutation(path) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const mutate = useCallback(
    (payload) => {
      setLoading(true);
      fetch("https://fakestoreapi.com/" + path, {
        method: "POST",
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    },
    [path]
  );

  return [mutate, { data, loading }];
}
