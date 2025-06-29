import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto md:px-20 lg:px-32 w-full over-flow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Barnd</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to your Vision</p>

      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
          <img
    src={assets.brand_img}
    alt="Brand"
    className="w-full md:w-[400px] lg:w-[450px] max-w-full object-cover"
  />

        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>10+</p>
                    <p >Years of Excellence</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>12+</p>
                    <p >Prpjects Completed</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>20+</p>
                    <p >Mn. Sq. Ft. Deliverd</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>25+</p>
                    <p >On Going Projects</p>
                </div>
            </div>

            <p className='my-6 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro iure illo ullam? Reiciendis quod earum voluptates  </p>
            <button className='bg-blue-600 text-white px-4 py-1.5 rounded'>Learn more</button>
        </div>

      </div>
    </div>
  )
}

export default About
