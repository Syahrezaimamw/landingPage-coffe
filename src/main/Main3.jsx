import React from 'react'
import about from '../images/about-coffee.png'
export const Main3 = () => {
  return (
    <div className='flex justify-center w-full bg-coklatbg' id='about'>
        <div className='w-full rounded-t-[60px] pt-[50px] pb-[50px] bg-white flex justify-center'>
            <div className='xl:max-w-[1100px] w-[90%] flex flex-col-reverse gap-9 md:flex-row justify-between'>
                <div className='w-full md:w-[45%]'>
                    <img src={about} alt="" className='w-[100%] md:w-[90%]'/>
                </div>
                <div className='flex flex-col justify-center w-full md:w-[45%]'>
                    <h1 className='text-[34px] text-th font-sambung text-center md:text-start'>Our History</h1>
                    <p className='mt-2 mt-3 text-center font-poppins md:text-start'>We make and grow the best coffee in Peru, accompanying families since 1930, with professional workers who harvest, collect and select the coffee with quality work, thus providing exquisite coffee to enjoy together as a family.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
