import { useEffect, useState } from "react";

function useFetch(request: any) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<any>(false);

  useEffect(() => {
    let isMount = true;

    (async function () {
      try {
        setIsLoading(true);

        if (isMount) {
          setData(await request());
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(true);
        setError(error);
        setIsLoading(false);
      }
    })();

    return () => {
      isMount = false;
    };
  }, [request]);

  return {
    data,
    isLoading,
    isError,
    error,
  };
}

export default useFetch;
