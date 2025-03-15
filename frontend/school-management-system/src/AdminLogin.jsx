import React, { useRef, useState } from 'react'
import Navbar from './components/Navbar'
import { Loader } from 'lucide-react';
const AdminLogin = () => {
    const emailRef=useRef();
    const passwordRef=useRef();
    const [loading,SetLoading]=useState(false);

    

    const [redirect,Setredirect]=useState(false);


    const submitForm=()=>{
        SetLoading(true);
        const DataObj={
            email:emailRef.current.value,
            password:passwordRef.current.value
        }

        Evaluate(DataObj);
        console.log(DataObj);
    }

    const Evaluate=(DataObj)=>{
        const {email,password}=DataObj;
        if(email=="admin" && password=="admin")
        {
            Setredirect(true);
        }
    }

    if(redirect)
    {

    }

  return (
    <>
    <Navbar/>
    <div className='w-screen h-screen bg-[#f8f8f8] flex justify-center items-center'>
        <div className='bg-blue-950 w-[400px] h-[400px] rounded-2xl flex flex-col items-center space-y-7 justify-center'>
            <div className='flex text-3xl font-serif text-white'>
                  Admin Login
            </div>
            <div className='bg-white w-[70%] h-[10%] rounded-2xl'>
                <input ref={emailRef} type="text" className='font-bold text-gray-500 rounded-2xl w-full h-full' placeholder='Enter your Email' />
            </div>
            <div className=' bg-white w-[70%] h-[10%] rounded-2xl'>
                <input ref={passwordRef} type="text" className='font-bold text-gray-500 rounded-2xl w-full h-full' placeholder='Enter your Password' />
            </div>
            <div className=' bg-green-500 w-[70%] h-[10%] rounded-2xl'>
                <button onClick={submitForm} className='font-bold rounded-2xl w-full h-full flex justify-center items-center'>
                    {
                        !loading?(
                            <>
                              <Loader className='animate-spin'/>
                            </>
                        ):(
                           <>
                              Login
                           </>
                        )
                    }
                
                </button>
            </div>
        </div>

    </div>

    </>

  )
}

export default AdminLogin