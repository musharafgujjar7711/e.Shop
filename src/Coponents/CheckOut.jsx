import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function CheckOut({setOrder}) {
 const[isbullingToggle,setIsbullingToggle]=useState(true)
 const[isShippingToggle,setIsShippingToggle]=useState(true)
 const[isPymintToggle,setIsPymintToggle]=useState(true)
 const cart= useSelector(state=>state.cart)
 const [shippingInfo,setShippingInfo]=useState({
  city:'',
  adress:'',
  zip:''
 })
 const[changePayment,setchangePayment]= useState("cd")
 const navigate =useNavigate()
  const handleOrder=()=>{
    const newOrder={
      products:cart.products,
      orderNumber:"804",
      ShippingInformation:shippingInfo,
      totalPrice:cart.totalPrice
    }
    setOrder(newOrder)
    navigate('/order')
  }
  return (
    <div className=' container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
      <h1 className=' text-2xl font-semibold mb-4 '> CHECK OUT</h1> 
      <div className=' flex flex-col sm:flex-col  lg:flex-row  justify-between space-x-9 mt-6'>
        <div className='lg:w-2/3 space-y-5'>
          <div >
          <div className=' flex flex-col border px-2 py-2 gap-4' >
               <div className=' flex items-center justify-between cursor-pointer' onClick={()=>setIsbullingToggle(!isbullingToggle)}>
                    <h1 className=' text-xl font-normal mb-3'>Billing infomation</h1>
                   {isbullingToggle ?  <FaAngleUp/> :  <FaAngleDown/>}
               </div>
               <div className={` flex flex-col gap-4 ${isbullingToggle ? "":"hidden"}`}>
                <div className=' flex flex-col'>
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder='Enter Name Here' className=' rounded-md border outline-none py-3 px-4' />
                </div>
                <div className=' flex flex-col'>
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder='Enter Email Here' className=' rounded-md border outline-none py-3 px-4' />
                </div>
                <div className=' flex flex-col'>
                  <label htmlFor="">Phone</label>
                  <input type="text" placeholder='Enter Phone number' className=' rounded-md border outline-none py-3 px-4' />
                </div>
               </div>
          </div>

          <div className=' flex flex-col border px-2 py-2 gap-4' >
               <div className=' flex items-center justify-between cursor-pointer' onClick={()=>setIsShippingToggle(!isShippingToggle)}>
                    <h1 className=' text-xl font-normal mb-3'>Shipping</h1>
                   {isShippingToggle ?  <FaAngleUp/> :  <FaAngleDown/>}
               </div>
               <div className={` flex flex-col gap-4 ${isShippingToggle ? "":"hidden"}`}>
                <div className=' flex flex-col'>
                  <label htmlFor="">Adress</label>
                  <input type="text" placeholder='Enter Adress' className=' rounded-md border outline-none py-3 px-4'onChange={(e)=>setShippingInfo({...shippingInfo,adress:e.target.value})} />
                </div>
                <div className=' flex flex-col'>
                  <label htmlFor="">City</label>
                  <input type="text" placeholder='Enter City' className=' rounded-md border outline-none py-3 px-4' onChange={(e)=>setShippingInfo({...shippingInfo,city:e.target.value})} />
                </div>
                <div className=' flex flex-col'>
                  <label htmlFor="">Zip Code</label>
                  <input type="text" placeholder='Enter Zip Code' className=' rounded-md border outline-none py-3 px-4' onChange={(e)=>setShippingInfo({...shippingInfo,zip:e.target.value})} />
                </div>
               </div>
          </div>
          </div>

          <div className=' flex flex-col border px-2 py-2 gap-2' >
               <div className=' flex items-center justify-between cursor-pointer' onClick={()=>setIsPymintToggle(!isPymintToggle)}>
                    <h1 className=' text-xl font-normal mb-3'>Shipping</h1>
                   {isPymintToggle ?  <FaAngleUp/> :  <FaAngleDown/>}
               </div>
                    <div className='ml-2 space-y-2 cursor-pointer'>
                    <div className=' space-y-3 '>
                      <input type="radio" name="payment" id="" className=' cursor-pointer' 
                       checked={changePayment === "cod"}
                         onChange={()=>setchangePayment("cod")}
                      />
                      <label htmlFor="" className='ml-2'>Cash on Delivery</label>
                     </div>

                    <div className='space-y-3 mb-2 cursor-pointer'>
                      <input type="radio" name="payment" id=""  className=' cursor-pointer'
                        checked={changePayment === "pm"}
                        onChange={()=>setchangePayment("pm")}
                      />
                      <label htmlFor="" className='ml-2'>Payment Method</label>
                     </div>
                     {changePayment === "cod" &&(
                  <div className='bg-gray-200 py-3 px-2 rounded-md'>
                    <h1 className='text-lg font-medium'>Debit Card Information</h1>
                   <div className=' space-y-4 mt-5'>
                   <div className='flex flex-col'>
                      <label htmlFor=""> Card Number  </label>
                      <input type="text" placeholder='Enter Card Number'  className=' border py-2 px-2 rounded-md'/>
                    </div>
                    
                    <div className='flex flex-col'>
                      <label htmlFor="">Card HoLder Name</label>
                      <input type="text" placeholder='Enter Card HoLder Name'  className=' border py-2 px-2 rounded-md'/>
                    </div>

                   <div className=' flex  justify-around'>
                   <div className='flex flex-col'>
                      <label htmlFor=""> Expairy Date </label>
                      <input type="text" placeholder='MM/YY'  className=' border py-2 px-2 rounded-md'/>
                    </div>

                   <div className='flex flex-col'>
                      <label htmlFor=""> CVV </label>
                      <input type="text" placeholder='CVV'  className=' border py-2 px-2 rounded-md'/>
                    </div>
                   </div>
                   </div>

                  </div>
                     )}
                    </div>
               </div>

        </div>
       

        <div className=' lg:w-1/3 bg-white shadow-md border rounded-lg p-6 flex flex-col'>
         <h4 className=' text-xl font-semibold'>Order Summary</h4>
         <div className='space-y4'>
          {cart.products.map((product)=>(
            <div key={product.id} className=' flex justify-between items-center '>
              <div className=' flex items-center'>
                <img src={product.image} alt="" className='w-16 h-16 object-contain rounded' />
             
              <div className=''>
               <h4 className='text-xs font-bold'> {product.name}</h4>
               <p className=' text-xs'>${product.price}*{product.quantity}</p>
              </div>
              </div>

              <div>
              <div className='text-xs'>
                ${product.price*product.quantity}
              </div>
              </div>
            </div>
          ))}
         </div>
         <div>
          <div className=' flex mt-2 justify-between mb-3 border-t '>
            <span className='mt-3'>Total Price</span>
            <span className='mt-3 font-bold'>${cart.totalPrice}</span>
          </div>
         </div>
         <button className='bg-red-600 hover:bg-red-500 py-2 mt-4 text-white' onClick={handleOrder}>Place Order</button>
        </div>
      </div>

    </div>
  )
}

export default CheckOut