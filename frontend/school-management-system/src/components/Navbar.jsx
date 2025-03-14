import React, { useState } from 'react'
import {Menu} from 'lucide-react'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [getSide,setSide]=useState(false);
    const sideBarOff=()=>{
        setSide(false);
    }
    //const [getCustomAnimate,setCustomAnimate]=useState(false);
    const Actions=()=>{
    
        setSide(!getSide);
    }
  return (
    <>
    <div className='w-screen h-[50px] bg-orange-400 flex justify-between items-center'>
        {
            !getSide?(
            <div className='w-auto h-auto'>
                <Menu size={40} onClick={Actions}/>
            </div>
            ):(
             <div>
                <X size={40} onClick={Actions}/>
             </div>
            )
        }


        {

         getSide?(
               <>
                  <div className='z-0 fixed left-0 top-0 w-[50%] h-screen bg-gray-400'>
            {
            !getSide?(
            <div className='w-auto h-auto'>
                <Menu size={40}  onClick={Actions}/>
            </div>
            ):(
             <div>
                <X size={40} onClick={Actions}/>
             </div>
            )
        }
        <div className='w-full h-screen flex flex-col space-y-2 mt-3'>
            <Link to='/studentlogin'>
                <div className='w-full h-[50px] bg-gray-200 flex justify-center items-center' onClick={Actions}>
               <p>Student Login</p>
            </div>
            </Link>
            <Link to='/stafflogin'>
            <div className='w-full h-[50px] bg-gray-200 flex justify-center items-center' onClick={Actions}>
               <p>Teacher Login</p>
            </div>
            </Link>
            <Link to='/adminlogin'>
            <div className='w-full h-[50px] bg-gray-200 flex justify-center items-center' onClick={Actions}>
               <p>Admin Login</p>
            </div>
            </Link>
            <div className='w-full h-[50px] bg-gray-200 flex justify-center items-center' onClick={Actions}>
               <p>Home</p>
            </div>
            <div className='w-full h-[50px] bg-gray-200 flex justify-center items-center' onClick={Actions}>
               <p>About us</p>
            </div>
        </div>

               </div>
               </>
         ):(
           <>

           </>
         ) 
        }


    </div>
    </>
  )
}

export default Navbar