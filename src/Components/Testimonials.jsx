import React from 'react'

function Testimonials() {
    return (
        <section className='testimonials flex flex-col items-center justify-around py-5'>
            <div >
                <p className='text-red-600 font-bold tracking-widest text-md px-2 text-center'>Testimonials</p>
                <h2 className='font-bold lg:text-5xl px-2 text-white'>What our clients say</h2>
            </div>
            <div>
                <p className='text-white font-bold px-5 lg:text-2xl italic py-5 lg:px-80 text-center'>
                    Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Morbi viverra volutpat ex, id pellentesque felis volutpat eu. Etiam mattis laoreet leo sed accumsan. Fusce.
                </p>
            </div>
            <div>
                <img src="./client-02-110x110.jpg" alt="client" className='rounded-full' />
                <h5 className='text-red-600 font-bold text-center'>Patric Stone</h5>
                <p className='text-white text-xs text-center'>FREELANCER</p>
            </div>
        </section>
    )
}

export default Testimonials