import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addToCard } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { AiFillRead } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function ProductCard({product,id}) {
    const dispatch= useDispatch()
    const handleClickCart=(e,product)=>{
      e.stopPropagation()
      e.preventDefault()
      dispatch(addToCard(product))
      alert("products add successfully")
    }
  return (
      <Link  to={`/product/${product.id}`}>
        <div className=  ' bg-white p-4  rounded relative border transform transition-transform hover:scale-110 duration-300 shadow-2xl opacity-0 animate-fadeInDown' key={product.id} style={{ animationDelay: `${id * .3}s` }}>
           
            
           <img src={product.image} alt="" className='w-full h-48 object-contain mb-5  ' />
          
           <h1 className=' text-lg font-semibold'>{product.name}</h1>
           <p className=' text-gray-500'>${product.price}</p>
           <div className=' flex items-center mt-2'>
               <FaStar className='text-yellow-500'/>
               <FaStar className='text-yellow-500'/>
               <FaStar className='text-yellow-500'/>
               <FaStar className='text-yellow-500'/>
           </div>
           <div  className=' absolute bottom-4 right-5 flex items-center justify-center w-8 h-8  bg-red-500 group text-white text-sm rounded-full hover:w-24 hover:bg-red-600 transition-all'   onClick={(e)=>handleClickCart(e,product)}>
               <span className=' group-hover:hidden'>+</span>
               <span className=' hidden group-hover:block'>Add to cart</span>
           </div>
       </div>
      </Link>
   
  )
}

export default ProductCard