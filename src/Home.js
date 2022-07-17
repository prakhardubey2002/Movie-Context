import React, { useContext } from 'react'
// import { AppContext } from './context';
import { useGlobalContext } from './context';



const Home = () => {
  // const name = useContext(AppContext);
  const names= useGlobalContext();//shorter vesion
  return (
    <>
    <div>My Home page</div>
      {/* <p>{name}</p> */}
      <p>{names}</p>
      </>
  )
}

export default Home