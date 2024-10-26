import React, { useEffect, useState } from 'react'
import { FaQuestionCircle } from 'react-icons/fa'
import { FaCar } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function ProductsDeatails() {
    const {id}=useParams()
    const products =useSelector(state=>state.product.products)
    const[product,setProduct]=useState()
    useEffect(()=>{
       const newProduct=products.find(product=>product.id === parseInt(id))
       setProduct(newProduct)
    },[id]) 
    if(!product) return <div>Loading........</div>
  return (
    <div className=' container mx-auto px-4 py-8 md:px-16 md:py-24'>
        <div className=' flex flex-col h-96  md:flex-row gap-8'>
             <div className='md:w-1/2 flex justify-center py-4 px-4 shadow-lg'>
                  <img src={product.image} alt="" className=' h-full w-full' />
             </div>
             <div className=' md:w-1/2 flex flex-col gap-6 py-6 px-6  items-center shadow-xl'>
                <h1 className=' text-2xl font-bold'>{product.name}</h1>
                <p className='font-semibold'>${product.price}</p>
                <div className=' bg-red-600 py-2 px-3 text-white rounded-sm '>
                    <button >Add to Cart</button>
                </div>
               
              <div className=' space-y-3'>
                <div className=' flex items-center gap-2'>
                  <FaCar/>
                  <p>Delivery & Return</p>
                </div>
                <div className=' flex items-center gap-2'>
                     <FaQuestionCircle/>
                     Ask a Question
                </div>
              </div>

             </div>
        </div>
    </div>
  )
}

export default ProductsDeatails