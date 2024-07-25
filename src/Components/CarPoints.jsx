import React from 'react'
import Washer from '../Data/Washer'

function CarPoints() {
    const { CarePointCards } = Washer;
    return (
        <section className='grid lg:grid-cols-3 px-10 py-28 gap-5'>
            <div className='flex justify-start lg:justify-center hidden lg:block '>
                <img src="./wash-machine.png" alt="washer machine" />
            </div>
            <div className=''>
                <p className='text-red-600 font-semibold tracking-widest text-md'>L O C A T I O N S</p>
                <h2 className='font-bold text-4xl pt-2 pb-10'>Car Washing and Care Points</h2>
                <div className='map grid grid-cols-2 gap-2'>
                    {CarePointCards.map((ele, index) => (
                        <div key={index} className='pr-10 carepoint cursor-pointer'>
                            <i className={ele.location}><span className='px-2 font-bold text-xs text-black points'>{ele.point}</span></i>
                            <p className='py-2'>{ele.pin}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className=' flex justify-center pt-24 rounded-3'>
                <div className='inputs flex flex-col items-center gap-5 py-10 lg:w-[70%]'>
                    <h3 className='font-bold text-2xl text-white'>Apply for a <span className='text-red-600'>Car Wash</span></h3>
                    <input type="name" placeholder='Your Name' className='py-3 rounded-full px-10' />
                    <input type="number" placeholder='Enter Your Number' className='py-3 rounded-full px-10' />
                    <input type="time" className='py-3 rounded-full px-10' />
                    <button className='bg-red-600 text-white py-4 lg:py-7 px-16 font-bold'>Send Request</button>
                </div>

            </div>

        </section>
    )
}

export default CarPoints