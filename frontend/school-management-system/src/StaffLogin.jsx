import React from 'react'

const AdminLogin = () => {
  return (
    <div className='w-screen h-screen bg-[#f8f8f8] flex justify-center items-center'>
        <div className='bg-blue-950 w-[400px] h-[400px] rounded-2xl flex flex-col items-center space-y-7 justify-center'>
            <div className='flex text-3xl font-serif text-white'>
                  Staff Login
            </div>
            <div className=' bg-white w-[70%] h-[10%] rounded-2xl'>
                <input type="text" className='font-bold text-gray-500 rounded-2xl w-full h-full' placeholder='Enter your Email' />
            </div>
            <div className=' bg-white w-[70%] h-[10%] rounded-2xl'>
                <input type="text" className='font-bold text-gray-500 rounded-2xl w-full h-full' placeholder='Enter your Password' />
            </div>
            <div className=' bg-green-500 w-[70%] h-[10%] rounded-2xl'>
                <button className='font-bold rounded-2xl w-full h-full'>
                    Login
                </button>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin