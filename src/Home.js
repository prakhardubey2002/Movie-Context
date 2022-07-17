import React, { useContext } from 'react'
// import { AppContext } from './context';
import { useGlobalContext } from './context';
import Search from './Search'
import Movies from './Movies';

const Home = () => {
  // const name = useContext(AppContext);
  // const names= useGlobalContext();//shorter vesion
  return (
    <>
    {/* <div>My Home page</div> */}
      {/* <p>{name}</p> */}
      {/* <p>{names}</p> */}
      <Search/>
      <Movies/>
      </>
  )
}

export default Home