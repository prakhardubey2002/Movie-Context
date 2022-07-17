import React, { useContext, useEffect, useState } from "react";
const API_URL = "http://www.omdbapi.com/?apikey=ea815e0c&s=titanic";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [movie, seTMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        seTMovie(data.Search)
      } else {
        setIsError({
          show: true,
          msg: data.error,
        })
      }
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    getMovies(API_URL);

  }, [])

  return <AppContext.Provider value={{ isLoading, isError, movie }} >{children}</AppContext.Provider>
};
const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext };