import React, { useContext, useEffect, useState } from "react";
const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [movie, seTMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [query,setQuery]=useState("titanic")
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
          msg: data.Error,
        })
      }
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    var timerOut=setTimeout(() => {//Debouncing effect
      getMovies(`${API_URL}&s=${query}`);
    }, 500);
    return ()=>clearTimeout(timerOut);//cleanup function will now return only one value instead of returning value after every word
  }, [query])

  return <AppContext.Provider value={{ isLoading, isError, movie,query,setQuery }} >{children}</AppContext.Provider>
};
const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext };