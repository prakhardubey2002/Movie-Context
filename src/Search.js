import React from 'react'
import { useGlobalContext } from './context';

const Search = () => {
  const {query,setQuery,isError}=useGlobalContext();
  
  return (
    <section className="search-section">
    <h2>Search your Favorite Movie </h2>
    <form action="#" onSubmit={(e)=>e.preventDefault()}>
      <div>
        <input type="text" placeholder='Search' value={query}
        onChange={(e)=>setQuery(e.target.value)} />
      </div>
    </form>
    <div className="card-error">
      {isError.show&&isError.msg}
    </div>
  </section>
  )
}

export default Search;