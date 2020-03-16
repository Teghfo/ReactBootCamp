import React, { useState, useEffect } from "react";

export default function useFetch(api) {
  const [response, setResponse] = useState({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    setResponse({
      data: null,
      loading: true,
      error: null
    });

    fetch(api)
      .then(res => res.json())
      .then(res => {
        setResponse({
          data: res,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        setResponse({
          data: null,
          loading: false,
          error: err
        });
      });
  }, [api]);
  return response;
}
