import React from 'react'

function Category() {
  return (
    <div className=' bg-white pb-6 pt-8'>
        <div className=' container mx-auto  '>
            <div className=' flex items-center gap-3 flex-col md:flex-row'>

            
            <div className=' w-96 h-72 flex items-center border bg-blue-200 px-6 rounded text-center relative'>
              <h1 className='w-24'>
               <b> kids</b> 
              <div className=''> view All</div>
              </h1>
            <div className=' '>
            <img src="public/imges/man.png" alt=""  className='w-80 h-72 ' />
            </div>
            </div>

            <div className=' w-96 h-72 flex items-center border bg-yellow-200 px-6 rounded text-center relative'>
              <h1 className='w-36'>
               <b> kids</b> 
              <div className=''> view All</div>
              </h1>
            <div className=' '>
            <img src="public/imges/woman.png" alt=""  className='w-80 h-72 ' />
            </div>
            </div>
           
            <div className=' w-96 h-72 flex items-center border bg-red-200 px-2 rounded text-center'>
              <h1 className=' flex-1 '>
               <b> kids</b> 
              <div className=''> view All</div>
              </h1>
            <div className=' flex-1'>
            <img src="public/imges/kids.png" alt=""  className='w-80 h-72 ' />
            </div>
            </div>
            

            </div>
        </div>
    </div>
  )
}

export default Category