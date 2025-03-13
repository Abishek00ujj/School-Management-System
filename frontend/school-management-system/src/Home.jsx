import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return(
    <>
       <div className='w-screen h-screen space-y-2 bg-[#f8f8f] flex flex-col justify-center items-center'>
         <div>
            <Link to='/adminlogin'>
            <button className='w-[100px] bg-blue-950 text-2xl text-white'>
                   Admin Login
             </button>
            </Link>
         </div>
         <div>
            <Link to='/stafflogin'>
            <button className='w-[100px] bg-blue-950 text-2xl text-white'>
                Staff Login
             </button>
            </Link>
         </div>
         <div>
            <Link to='/studentlogin'>
            <button className='w-[100px] bg-blue-950 text-2xl text-white'>
                   Student Login
             </button>
            </Link>
         </div>
       </div>
    </>
  )
}

export default Home