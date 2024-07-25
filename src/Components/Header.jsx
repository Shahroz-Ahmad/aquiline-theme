import React, { useState } from 'react'

function Header() {
  const [toggle, setToggle] = useState(false)

  return (
    <header className='flex flex-col h-[100vh] w-full '>
      <div className={`h-[100%] w-full z-10 bg-black text-white absolute bottom-0 transition-all duration-500 
      ${toggle ? 'right-0' : '-right-full'} lg:hidden`}>
      <button onClick={() => setToggle(!toggle)} className='block lg:hidden absolute right-8 top-7'><i class="fa-solid fa-x px-4 pt-8 text-[#CCB686] text-4xl cursor-pointer   "></i></button>
      <div></div>
      </div>
      <nav className='flex justify-between lg:px-40 bg-[#00000053] py-5 text-white px-5 w-full'>
        x<img src="./logo_1x-1.png" alt="logo" />
        <div className='lg:flex hidden'>
          <ul className='lg:flex font-bold px-16 pt-8 '>
            <li className='text-[#CCB686] px-6 hover:text-[#CCB686] cursor-pointer'>Home</li>
            <li className=' px-6 hover:text-[#CCB686] cursor-pointer'>Booking</li>
            <li className=' px-6 hover:text-[#CCB686] cursor-pointer'>About us</li>
            <li className=' px-6 hover:text-[#CCB686] cursor-pointer'>Products</li>
            <li className=' px-6 hover:text-[#CCB686] cursor-pointer'>Blog</li>
            <li className=' px-6 hover:text-[#CCB686] cursor-pointer'>Contact</li>
            <li className=' px-6 hover:text-[#CCB686] cursor-pointer'>Pages</li>
          </ul>
          <i class="fa-solid fa-user px-4 pt-8 text-[#CCB686] cursor-pointer"></i>
          <i class="fa-solid fa-cart-shopping px-4 pt-8 text-[#CCB686] cursor-pointer">
            <span className='pl-1 text-sm text-white'>0</span>
          </i>
          <i class="fa-solid fa-magnifying-glass px-4 pt-8 text-[#CCB686] cursor-pointer"></i>
        </div>
        <button onClick={() => setToggle(!toggle)} className='block lg:hidden z-24'><i class="fa-solid fa-bars-staggered px-4 pt-8 text-[#CCB686] text-4xl cursor-pointer   "></i></button>
      </nav>
      <div className='lg:h-[80vh] flex flex-col justify-center items-center py-24'>
        <p className='text-red-600 font-semibold tracking-widest text-lg'>MORDERN EQUIPMENT</p>
        <h1 className='font-bold text-white text-5xl lg:text-8xl pb-4 pl-10'>Quality Service For You</h1>
        <p className='text-white text-sm text-center pb-14'>Lorem ipsum dolor, sit amet  consectetur <br /> adipisicing elit. Quis, ab.</p>
        <div className=' flex flex-col lg:flex-row'>
          <button className='btn1 bg-red-600 text-white py-7 px-16 font-bold my-5 lg:my-0  lg:mr-5 relative hover:text-black'>Read More</button>
          <button className='btn1 bg-[#CCB686] py-7 px-16 font-bold relative'>Order Now</button>
        </div>
      </div>
    </header>
  )
}

export default Header