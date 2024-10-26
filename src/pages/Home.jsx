import React, { useEffect } from 'react';
import { Catagories, mockData } from '../assets/MocsData';
import InfoSection from '../Coponents/InfoSection';
import Category from '../Coponents/Category';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/products';
import ProductCard from '../Coponents/ProductCard';
import WomanCategory from '../assets/Images/WomanCart.png'
import Shop from './Shop';




function Home() {


  const dispatch = useDispatch();
  const products = useSelector((state => state.product))
  useEffect(() => {
    dispatch(setProducts(mockData))
  }, [])



  return (
    <div className='bg-white px-4 md:px-14 lg:px-24 '>
      <div className=' container mx-auto flex flex-col-reverse  md:flex-row items-center md:items-start gap-2 py-4 space-x-3'>

        <div className=' w-full md:w-3/12 '>
          <h1 className=' py-2 font-bold capitalize bg-red-500 px-1 text-white'>shop of catagoryu</h1>
          <ul className=' space-y-3 bg-gray-200 px-3'>
            {Catagories.map((catagory, index ) => (
              <li key={index} k className=' flex items-center gap-1'>
                <div className=' h-2 w-2   rounded-full border border-red-700'></div>
                {catagory}
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full md:w-9/12 h-96 relative bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded flex justify-center items-center  '>
         
          <img src={WomanCategory} alt="Woman with Cart"
            className='h-3/5 sm:h-full  w-full -right-4  object-cover md:w-6/12 lg:w-8/12 absolute sm:right-3  lg:right-3'
          />

  
          <div className=' absolute -top-4 left-2  md:top-12 lg:left-3 sm:left-1 md:ml-14  lg:ml-6 flex flex-col gap-2 mt-4 mb-10 md:mb-0 text-white px-5 py-5'>
            <p className='md:text-sm text-xs text-gray-900 font-semibold'>Code with Musharaf</p>
            <h2 className='lg:text-2xl  xl:text-3xl md:text-lg text-xl font-bold capitalize py-2'>Welcome to e-Shop</h2>
            <p className='lg:text-lg md:text-sm text-sm font-bold'>MILLION+ PRODUCTS</p>
            <button className='border py-1 px-1 rounded-md md:py-2 mt-7 md:px-4 mx-auto lg:ml-7 bg-yellow-300 font-medium hover:bg-yellow-500 duration-200 text-xs md:text-sm hover:scale-105'>
              SHOP NOW
            </button>
          </div>
        </div>

      </div>
      <InfoSection />
      <Category />
      <div className=' container mx-auto py-12'>
        <h1 className=' text-2xl font-bold mb-5 text-center'>Top Products</h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 cursor-pointer">
          {products.products.slice(0, 5).map((product) => (
            <ProductCard product={product} />

          ))}
        </div>
      </div>
      <Shop />
    </div>


  )
}

export default Home