import React from 'react'

function PremiumWashing() {
    return (
        <section className=' premium flex items-center flex-col lg:py-16'>
                    <p className='text-red-600 font-bold tracking-widest text-md pt-2 lg:py-5 px-2'>WHAT WE DO</p>
                    <h2 className='font-bold lg:text-5xl text-white py-2 lg:py-5 px-4'>Premium Washing Services</h2>
                    <p className='text-white text-center pb-8 px-4'> Nulla vel tempus diam. Nunc vulputate, quam sit amet commodo <br /> tincidunt, enim lorem scelerisque massa, vel ultricies.</p>
                    <div className='grid lg:grid-cols-3 justify-center text-white w-[80%]'>
                        <div className='col-span-2 hidden lg:block'>
                            <img src="serv_03.jpg" alt="Services" height='' />
                        </div>
                        <div className=' bg-white text-black px-14 py-5'>
                            <h2 className='font-bold text-4xl lg:pt-14 pb-5'>Engine Service</h2>
                            <i class="fa-regular fa-clock text-red-600 lg:pb-10"><span className='font-bold text-sm text-black'> 30 mins </span></i>
                            <p className='leading-loose lg:pb-5'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Donec cursus hendrerit eros, in pharetra lacus lobortis eu.</p>
                            <ul className='py-5'>
                                <li className='py-2'><i class="fa-solid fa-check text-green-300 font-bold text-xs"><span className='text-black pl-5'> Seats washing</span></i></li>
                                <li className='py-2'><i class="fa-solid fa-check text-green-300 font-bold text-xs"><span className='text-black pl-5'> Vacuum cleaning</span></i></li>
                                <li className='py-2'><i class="fa-solid fa-check text-green-300 font-bold text-xs"><span className='text-black pl-5'> Interior wet cleaning</span></i></li>
                                <li className='py-2'><i class="fa-solid fa-check text-green-300 font-bold text-xs"><span className='text-black pl-5'> Window wiping</span></i></li>
                            </ul>
                            <button className='bg-red-600 text-white py-7 px-16 font-bold'>Read more</button>
                        </div>

                    </div>
        </section>
    )
}

export default PremiumWashing