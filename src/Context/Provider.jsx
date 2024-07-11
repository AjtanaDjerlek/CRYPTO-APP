
import React, { createContext, useState, useEffect } from 'react';
import fetchData from '../API/Request';
export const MyDataContext = createContext();
export const MyDataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = 'f026b9f55amsha967c914610b5bep19604ajsn605d93c21fcf';
  const apiUrl = 'https://api.coinranking.com/v2/coins';

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData(apiKey, apiUrl);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, [apiKey, apiUrl]);

  return (
    <MyDataContext.Provider value={{ data, loading, error }}>
      {children}
    </MyDataContext.Provider>
  );
};
