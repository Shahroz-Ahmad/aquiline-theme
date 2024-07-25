import React from 'react'
import Washer from '../Data/Washer'

function Branding() {
    const {BrandingCards} = Washer;
  return (
    <section className='px-5 bg-gray-200 '>
        <div className='flex flex-wrap gap-10 lg:gap-36  py-10 items-center justify-center'>
            {BrandingCards.map((ele,i)=>(
                <img key={i} src={ele.image} alt="Branding" height='80px' width='90px' />
            ))}
        </div>
    </section>
  )
}

export default Branding