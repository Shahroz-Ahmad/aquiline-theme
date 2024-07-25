import React from 'react'
import Washer from '../Data/Washer'

function Footer() {
  const { FooterCards } = Washer;

  return (
    <footer className='flex flex-col items-center text-white justify-center'>
      <div className='flex flex-col items-center py-8 '>
        <img src="./logo_1x-1.png" alt="logo" />
        <p className='text-center'>Etiam consequat sem ullamcorper, euismod metus sit amet, tristique justo. <br /> Vestibulum mattis, nisi ut faucibus commodo, risus ex commodo.</p>
      </div>
      <div className=' flex flex-wrap lg:flex-nowrap justify-center gap-5'>
        {FooterCards.map((ele, index) => (
          <div className="px-5 flex flex-col justify-center items-center group hover:text-white hover:cursor-pointer ">
          <i className={`${ele.icon} text-red-600 text-5xl py-5 group-hover:text-white  `}></i>
          <h2 className="font-bold py-2">{ele.info}</h2>
          <p className={`${index === 0 && 'text-red-600'}`}>{ele.main}</p>
      </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer