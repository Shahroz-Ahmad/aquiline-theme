import React from 'react'

function Map({ e }) {
    console.log(e);
    return (
        <>
            <div className=' border-2 px-20 py-16 pricingcard'>
                {(e.heading && e.Price) ? (
                    <>
                        <h4 className='font-bold text-red-600 text-lg pb-5'>{e.heading}</h4>
                        <h2 className='font-bold text-6xl pb-10'>{e.Price}</h2>
                    </>
                ) : (
                    <>
                        <img src={e.img} alt="" height='268px' width='286px'/>
                    </>
                )}
                {(e.icon && e.services1) ? (
                    <ul>
                        <li className='py-2'><i class={e.icon}><span>{e.services1}</span></i></li>
                        <li className='py-2'>{e.services2}</li>
                        <li className='py-2'>{e.services3}</li>
                        <li className='py-2'>{e.services4}</li>
                    </ul>
                ) : (
                  <>
                    <h2 className='font-bold text-2xl pb-5'>{e.heading}</h2>
                    <p className='pb-5'>e{e.text}</p>
                  </>
                )}

               {(e.time)?(
                 <i class="fa-regular fa-clock text-xl py-5 text-red-600 font-bold"><span className='text-sm text-black pl-2 font-bold'>{e.time}</span></i>
               ):(
                <h2 className='pb-5'>{e.price}</h2>
               )}
                <div>
                    <button className='bg-red-600 text-white py-3 lg:py-7 px-5 lg:px-16 font-bold text-sm'>{e.btn}</button>
                </div>
            </div>
        </>
    )
}

export default Map;