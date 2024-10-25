import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Coponents/ProductCard'

function FilterData() {
    const filterProduct = useSelector(state=>state.product.filterData)
  return (
    <div>
        <div className=' container mx-auto py-12'>
            <h1 className=' text-2xl font-bold mb-5 text-center'>Shop</h1>
            <div className= " grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 cursor-pointer">
            {filterProduct.map((product)=>(             
             <ProductCard product={product}/>
            
            ))}
            </div>
           </div>
           
    </div>
  )
}

export default FilterData