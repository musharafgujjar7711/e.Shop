import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login'
import Model from './Model'
import Regisster from './Regisster'
import { setSearchTerm } from '../redux/products'

function Navbar() {
    const products = useSelector(state=> state.cart.products)
    const [isOptenLogin ,setisOpenLogin]=useState(false)
    const [isModelOpen,setIsModelOpen]=useState(false)
    const [toggleNightMode,setToggleNightMode]=useState(false)
    const navigat=useNavigate()
    const[search,setSearch]=useState()
    const dispatch =useDispatch()
    const handleSearch =(e)=>{
        e.preventDefault()
         dispatch(setSearchTerm(search))
         navigat("/filterData")
    }

    //   const toggleMode=()=>{
    //     setToggleNightMode((premode)=>!premode)
    //   }
    //   useEffect(()=>{
    //     if (toggleMode) {
    //         document.body.style.backgroundColor="#000"
    //         document.body.style.color="#fff"
    //     }
    //     else{
    //          document.body.style.backgroundColor="#fff"
    //         document.body.style.color="#000"
    //     }
    //   })
  return (
   <nav className=' bg-white shadow-md'>
    <div className=' container mx-auto flex justify-between px-4 md:px-14 lg:px-24 py-4'>
        <div className='logo text-lg font-bold'>
     <Link  to='/'>e.Shope</Link>
        </div>
        <div className=' relative flex-1 mx-4'>
            <form onSubmit={handleSearch}>
                <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder='search products' className=' w-full border px-3 py-2 rounded-md'/>
                <FaSearch size={20} className=' text-red-400 absolute top-3 right-4 hidden md:block'/>
            </form>
        </div>
        <div className=' flex items-center space-x-3'>
            <Link to="/cart" className=' relative'>
            <FaShoppingCart/>
            {products.length > 0 && (
                <span className=' absolute top-0 text-xs text-center w-4 left-3 bg-red-500 text-white rounded-full flex justify-between'>{products.length}</span>
            )}
            </Link>
           
            <div className='flex gap-2'>
            <button className='hidden md:block' onClick={()=>setIsModelOpen(true)}>
                Login |Register
            </button>
           
             <button className=' block md:hidden' onClick={()=>setIsModelOpen(true)}>
                <FaUser/>
             </button>
        </div>
        </div>
      
    </div>
    <div className=' flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
        <Link to="/" className=' hover:underline'>Home</Link>
        <Link to="/shop" className=' hover:underline'>Shope</Link>
        <Link to="/connect" className=' hover:underline'>Connect</Link>
        <Link to="/About" className=' hover:underline'>About</Link>
    </div>
    <Model setIsModelOpen={setIsModelOpen} isModelOpen={isModelOpen} > {isOptenLogin? <Login/>:<Regisster/>}</Model>
   </nav>
  )
}

export default Navbar