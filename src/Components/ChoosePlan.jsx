import React from 'react'
import Washer from '../Data/Washer'
import Map from './Map';

function ChoosePlan() {
    const { ChoosePlanCards } = Washer;
    const { PricingCards } = Washer;

    return (
        <section className='flex items-center flex-col lg:py-12 w-full '>
            <p className='text-red-600 font-bold tracking-widest text-md pt-2 lg:py-5 px-2'>WHAT WE DO</p>
            <h2 className='font-bold lg:text-5xl py-2 lg:py-5 px-4'>Premium Washing Services</h2>
            <p className=' text-center pb-8 px-4'> Nulla vel tempus diam. Nunc vulputate, quam sit amet commodo <br /> tincidunt, enim lorem scelerisque massa, vel ultricies.</p>
            <div className=''>
                <div className=' flex justify-center lg:flex-nowrap flex-wrap gap-10'>
                    {ChoosePlanCards.map((ele, index) => (
                        <div key={index} className='lg:px-10 py-2 cursor-pointer '>
                            <img src={ele.image} alt="" height="100px" width="163px" />
                            <h4 className='font-bold'>{ele.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
            <div className='py-5 xl:px-5 px-10 w-full'>
                <div className='flex flex-wrap xl:flex-nowrap gap-5 justify-center text-center py-10  '>
                    {PricingCards.map((e, i) => (
                        <Map e={e} key={i} />
                    ))}
                </div>

            </div>

        </section>
    )
}

export default ChoosePlan