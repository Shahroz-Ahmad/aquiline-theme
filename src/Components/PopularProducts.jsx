import React from 'react'
import Map from './Map'
import Washer from '../Data/Washer'


function PopularProducts() {

  const { PopularProductsCards } = Washer;

  return (
    <section className='flex items-center flex-col lg:py-12 px-5 py-5 lg:px-24'>
      <p className='text-red-600 font-bold tracking-widest text-md pt-2 lg:py-5 px-2'>ONLINE STORE</p>
      <h2 className='font-bold lg:text-5xl py-2 lg:py-5 px-4'>Popular Products</h2>
      <div className='py-5'>
        <div className='flex flex-wrap lg:flex-nowrap gap-5 justify-center text-center py-10 '>
          {PopularProductsCards.map((e, i) => (
            <Map e={e} key={i} />
          ))}
        </div>

      </div>

      <button className='bg-black text-white py-7 px-16 font-bold'>More Products</button>
    </section>

  )

}

export default PopularProducts