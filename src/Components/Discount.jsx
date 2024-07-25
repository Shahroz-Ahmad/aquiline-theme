import React from 'react'

function Discount() {
  return (
    <section className='grid grid-rows-3 justify-center items-center lg:grid-rows-1 lg:grid-cols-3 bg-red-600 overflow-hidden py-10 lg:py-24 discount px-5'>
        <div className='flex justify-center'>
            <h2 className='text-black font-bold text-center lg:text-left lg:    px-10 text-2xl lg:text-4xl '>
            Hurry to join the <span className='text-white'>discount program</span>
            </h2>
        </div>
        <div className='relative'>
            <img src="./card_02.png" alt="" className='absolute -top-10 right-10 credit2 ' />
            <img src="./card_01.png" alt="" className='absolute right-20 top-0 duration-500 credit1 ' />
        </div>
        <div className='mx-auto my-auto z-10'>
            <button className='bg-black text-white py-7 px-16 font-bold'>join now</button>
        </div>
    </section>
  )
}

export default Discount