import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Coponents/ProductCard'

function Shop() {
  const  products =useSelector(state=>state.product)
  return (
    <div>
        <div className=' container mx-auto py-12'>
            <h1 className=' text-2xl font-bold mb-5 text-center'>Shop</h1>
            <div className= " grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 cursor-pointer">
            {products.products.map((product,id)=>(             
             <ProductCard product={product} id={id} />
          
            ))}
            </div>
           </div>
           
    </div>
  )
}

export default Shop