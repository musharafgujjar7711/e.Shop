import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-gray-950 py-3 px-3 '>
      <div className=' container mx-auto grid grid-cols-1 md:grid-cols-3 text-white mt-4 mb-6 flex-col md:flex-row gap-12'>
        <div>
          <h1 className=' text-2xl font-semibold text-center md:text-start '>e.shop</h1>
          <p className=' text-lg text-center md:text-start mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique voluptatum nobis fugiat sequi. are very good  </p>
        </div>

        <div className=' flex flex-col md:items-center'>
          <h1 className=' text-xl font-semibold text-center md:text-start'>Quick links</h1>
          <ul className=' flex flex-col gap-3 mt-4 text-center md:text-start'>

            <li><Link to="/" className='hover:underline' >Home</Link></li>
            <li><Link to="/shop" className='hover:underline' >Shop</Link></li>
            <li><Link to="/About" className='hover:underline' >About Us</Link></li>
            <li><Link to="/contact" className='hover:underline' >Contact Us</Link></li>


          </ul>
        </div>


        <div className=' flex flex-col justify-center '>
          <h1 className=' text-xl font-semibold text-center md:text-start'>follow us</h1>
          <span className=' flex  gap-2 mt-4 '>
            <FaFacebook size={25} />
            <FaTwitter size={25} />
            <FaInstagram size={25} />
            <FaLinkedin  size={25}/>
          </span>
          <div className=' flex border items-center  mt-8'>
            <input type="text" placeholder='You Email' className='py-2 px-2 placeholder:text-lg bg-transparent ral  rounded-sm outline-none w-full' />
            <button className=' r bg-red-600 text-white font-medium text-lg rounded-md py-3 px-3 '>Subcribe</button>
          </div>
        </div>
    
      </div>
      <div className=' border-t border-gray-500 pt-4 mt-4   text-white '>
        <div className=' container mx-auto flex justify-between lg:mt-6 mt-4 mb-3'>
          <p>&copy; 2024 e-Shop All The right resvered</p>
       
       
        <div className=' flex space-x-4'>
          <a href="" className=' hover:underline'>Privacy policy</a>
          <a href="" className='hover:underline'>terms and condition</a>
        </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer