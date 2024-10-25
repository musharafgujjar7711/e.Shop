import React, { useState } from 'react'
import { FaTractor, FaTrash, FaTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import Model from '../Coponents/Model'
import ChangeAdress from '../Coponents/ChangeAdress'
import { deCreaseQuantity, inCreaseQuantity, removeItem } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
function Cart() {
    const cart = useSelector(state => state.cart)
    const [adress, setAdress] = useState("chak no 771")
    const [isModelOpen, setIsModelOpen] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div className='container mx-auto  px-4 md:px-14 lg:px-24 py-4'>
            {cart.products.length > 0 ?
                <div>
                    <h3 className='text-2xl font-semibold'>SHOPPING CART</h3>
                    <div className=' father mt-6 flex justify-between flex-col md:flex-row space-x-10 '>
                        <div className='product md:w-2/3'>
                            <div className='flex justify-between border-b mb-4 text-xs font-bold '>
                                <h1>
                                    PRODUCT
                                </h1>
                                <ul className=' flex items-center gap-8 '>
                                    <li className='hidden md:block'>PRICE</li>
                                    <li className='hidden md:block'>QUANTITY</li>
                                    <li className='hidden md:block'>SUBTOTAL</li>
                                    <li className='hidden md:block'>REMOVE</li>
                                </ul>
                            </div>
                            <div className='space-y-3'>
                                {cart.products.map((product) => (
                                    <div className=' flex justify-between  items-center border-b border-' key={product.id}>
                                        <div className=' flex items-center space-x-4 mb-4 '><img src={product.image} alt="" className=' w-16 h-16 object-contain rounded' />

                                            <div >
                                                <div className='text-xs font-bold md:text-lg md:font-semibold'>{product.name}</div>
                                                <p>${product.price}</p>
                                            </div>
                                        </div>


                                        <div className=' flex space-x-3 border  items-center justify-center flex-col md:flex-row '>
                                            <button className=' text-xl font-bold px-2 border-b md:border-r items-center' onClick={() => dispatch(deCreaseQuantity(product.id))}>-</button>
                                            <p className='text-xl px-2'>{product.quantity}</p>
                                            <button className='text-xl px-1 border-t md:border-l' onClick={() => dispatch(inCreaseQuantity(product.id))}>+</button>
                                        </div>
                                        <p>${(product.price * product.quantity).toFixed(2)}</p>
                                        <button>
                                            <FaTrashAlt className=' text-red-600 hover:text-red-500' onClick={() => dispatch(removeItem(product.id))} />
                                        </button>
                                    </div>



                                ))}
                            </div>
                        </div>


                        <div className=' left md:w-1/3 bg-white shadow-2xl py-3 px-4 flex flex-col gap-7 rounded-lg'>
                            <h2 className=' text-sm font-medium uppercase'>total price</h2>
                            <div className=' flex justify-between'>
                                <span className=' uppercase text-sm'>total Items</span>
                                <span className='  text-lg'>{cart.totalQuantity}</span>
                            </div>
                            <div className=' border-t'>
                                <p>Shipping</p>
                                <div className='flex gap-2 ml-2 '>
                                    <p className=' text-lg'>Shipping to</p>
                                    <span className='font-medium'>{adress}</span>
                                </div>
                                <button className='ml-2 text-blue-500 hover:text-blue-400' onClick={() => setIsModelOpen(true)}>Change the adress</button>
                            </div>
                            <div className=' border-t flex justify-between'>
                                <span>Total Price</span>
                                <span>${cart.totalPrice.toFixed(2)}</span>
                            </div>
                            <button className=' bg-red-600 mb-2 text-white py-2 hover:bg-red-500' onClick={() => navigate("/checkout")}>Proceed to CheckOut</button>
                        </div>
                    </div>
                    <Model setIsModelOpen={setIsModelOpen} isModelOpen={isModelOpen}
                    >  <ChangeAdress setAdress={setAdress} setIsModelOpen={setIsModelOpen} /></Model>
                </div>
                : <div className=' flex justify-center items-center'>
                    <img src="public/imges/NoProducts.png" alt="w-96" />
                </div>
            }

        </div>
    )
}

export default Cart