import { useState } from "react";

const useAsync = (action) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const doFetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const newData = await action();
      setData(newData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };
  return { data, loading, error, doFetch };
};
export default useAsync;
