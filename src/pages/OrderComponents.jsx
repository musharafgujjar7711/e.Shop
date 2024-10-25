import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderComponents({Order}) {
  const Navigate=useNavigate()
  return (
    <div className=' container mx-auto mt-4 px-24 flex flex-col gap-4'>
        <h1 className=' text-xl font-medium' >Thanks for your Order</h1>
        <p className=' text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda asperiores repudiandae illo tenetur </p>
        <div className=' bg-gray-200 rounded py-3 px-2  '>
           <div className=' flex flex-col gap-2'>
           <h3 className='font-semibold'>Order Summary</h3>
           <p>Order Number:{Order.orderNumber}</p>
           </div>

            <div className=' mt-5 '>
              <h2 className='font-semibold'>Shipping Information</h2>
             <div>
             <p>{Order.ShippingInformation.adress}</p>
              <p>{Order.ShippingInformation.city}</p>
              <p>{Order.ShippingInformation.zip}</p>
             </div>
            </div>

            <div className='space-y-4 mt-5'>
              <h3 className=' font-semibold'>Items Order</h3>
              {Order.products.map((product)=>(
                 <div className=' flex justify-between'>
                <p>  {product.name}*{product.quantity}</p>
                <p>  {product.price}*{product.quantity}</p>
                 </div>
              ))}
            </div>
           <div className='flex justify-between mt-4'>
           <span>Total Price</span>
           <span>{Order.totalPrice}</span>
           </div>
        </div>
        <div className=' flex gap-3'>
          <button className='bg-green-700 text-white py-2 px-2 mb-2'>Order Tracking</button>
          <button className='bg-red-700 text-white py-2 px-2 mb-2' onClick={()=>Navigate("/")}>Continue Shopping</button>
        </div>
    </div>
  )
}

export default OrderComponents