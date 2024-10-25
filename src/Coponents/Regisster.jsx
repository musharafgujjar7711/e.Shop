import React from 'react'

function Regisster() {
  return (
    <div className='bg-white flex flex-col gap-3  px-2'>
    <div className='flex  flex-col gap-4'>
      <h1 className='text-xl font-bold'>Sign Up</h1>
     <div className=' space-y-3'>
     <form  className='flex flex-col'>
        <label htmlFor="" className='font-medium'>Name</label>
        <input type=" "  placeholder='Enter Your Name Here' className='outline-none border rounded  py-2 px-2'/>
      </form>
     <form  className='flex flex-col'>
        <label htmlFor="" className='font-medium'>Email</label>
        <input type=" "  placeholder='Enter Your Email Here' className='outline-none border rounded  py-2 px-2'/>
      </form>
      <form className='flex flex-col' >
        <label htmlFor="" className='font-medium'>Password</label>
        <input type=" "  placeholder='Enter Password here'  className='outline-none border rounded  py-2 px-2'/>
      </form>
     </div>
     <div className=' flex justify-between mt-2'>
      <label className=' flex items-center gap-2'>
        <input type="checkbox" name="" id="" />
        <span>Remember Me</span>
      </label>
      
     </div>
     <div className='bg-red-700 py-2 text-white text-center mt-2'>
      <button className=' cursor-pointer'>Sign up</button>
     </div>
     <div className=' mt-3 text-center'>
      <p>Already have a Account</p>
      <p className='text-red-600 cursor-pointer'>Login</p>
     </div>
    </div>
  </div>
  )
}

export default Regisster