import React from 'react'
import Washer from '../Data/Washer'

function ProfessinalWashing() {
    const { WasherCards } =  Washer;

    return (
        <>
            <section className='grid lg:grid-cols-2 bg-white justify-center text-center lg:text-left lg:px-40 py-10 px-10  overflow-hidden'>
                <div className=' pt-28 px-5'>
                    <p className='text-red-600 font-semibold tracking-widest text-lg'>MORDERN EQUIPMENT</p>
                    <h2 className='font-bold text-5xl lg:pr-48'>Professional washing and cleaning of your car</h2>
                    <p className='py-10 lg:pr-48 '>Phasellus in arcu dapibus, lobortis est in, suscipit diam. Vivamus faucibus faucibus eros et porttitor. Sed est nulla, tincidunt ac ex eget, dictum mollis tortor. Vivamus faucibus nec ipsum id aliquam lobortis est.</p>
                    <h5 className='font-bold text-2xl pb-10'>Call for book : <span className='text-red-500'>8-800-10-500</span></h5>
                    <button className='bg-red-600 text-white py-7 px-16 font-bold'>Read more</button>
                </div>
                <div className=' flex w-[1500px] hidden lg:block '>
                    <img src="./washer.png" alt="Washer" className='overflow-auto' />
                </div>
                <div className=' w-[100vw] lg:w-[90vw] py-5 px-5'>
                    <div className=' flex flex-wrap lg:flex-nowrap justify-center lg:justify-start washer '>
                        {WasherCards.map((ele, index) => (
                            <div key={index} className='washerCard cursor-pointer px-10 lg:py-0 py-5 lg:border-r'>
                                <i className={ele.icon} ></i>
                                <h2 className='font-bold text-2xl py-3'>{ele.heading}</h2>
                                <p>{ele.para}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfessinalWashing