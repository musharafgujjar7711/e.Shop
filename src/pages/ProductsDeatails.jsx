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
        <div className=' flex flex-col  md:flex-row gap-8'>
             <div className='md:w-1/2 flex justify-center py-4 px-4 shadow-lg'>
                  <img src={product.image} alt="" className=' h-full w-full' />
             </div>
             <div className=' md:w-1/2'>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <div>
                    <button>Add to Cart</button>
                </div>
               
              <div>
                <div>
                  <FaCar/>
                  <p>Delivery & Return</p>
                </div>
                <div>
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