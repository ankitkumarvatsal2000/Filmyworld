import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { Appstate } from "../App";

const Header = () => {
  const useAppState = useContext(Appstate);
  return (
    <div >
      <div className='top-0 flex justify-between h-12  ' >
        <Link to={"/"}><h1 className='text-2xl font-bold'>Filmy<span className='text-red-800'>World</span></h1></Link>
        {useAppState.login ?
          <Link to={'/addmovie'}><button className='pr-3'><AddIcon className='text-red-700' />Add New</button></Link>
          :
          <Link to={'/login'}><button className='pl-5 pr-5 mr-5  mt-2 text-lg rounded-md bg-green-500 shadow-md hover:bg-violet-600 duration-1000 hover:rotate-180'>Login</button></Link>

        }
      </div>
      <hr></hr>
    </div>

  )
}

export default Header;