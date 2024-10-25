import React from 'react'
import { BiMoney, BiSupport } from 'react-icons/bi'
import { FaShippingFast } from 'react-icons/fa'
import { GrSecure } from 'react-icons/gr'
import { MdDiscount } from 'react-icons/md'

function InfoSection() {

    const infoItems=[
        {
           icons:<FaShippingFast size={25}/>,
           title: "Free Shipping",
           desc:"get  your order delivered with no extra cost"
        },
        {
           icons:<BiSupport size={25}/>,
           title: "Support 27/5",
           desc:"get  your order delivered with no extra cost"
        },
        {
           icons:<BiMoney size={25}/>,
           title: "100% Money Back",
           desc:"get  your order delivered with no extra cost"
        },
        {
           icons:<GrSecure size={25}/>,
           title:"Payment Secure",
           desc:"are you ok and what you doing"
        },
        {
           icons:<MdDiscount size={25}/>,
           title: "Discounts",
           desc:"enjoy the best deal on our products  no extra "
        },
    ]
  return (
    <div className='bg-white pb-8 pt-11'>
        <div className=' container mx-auto'>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3'>
                {infoItems.map((items,index)=>(
                    <div className=' text-center flex flex-col items-center py-2 px-2 gap-3  hover:scale-110 duration-300 shadow-2xl'>
                         <p className=' text-red-600'> {items.icons}</p>
                        <h1 className=' text-lg font-bold '>{items.title}</h1>
                        <p className=' text-sm py-2 px-2'>{items.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default InfoSection