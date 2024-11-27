import React from 'react'
import coffe from '../images/testimonial-coffee.png'
export const Main5 = () => {
    return (
        <div className='w-full bg-coklatbg' id='testimoni'>
            <div className='rounded-t-[50px]  bg-white pt-[60px] flex justify-center'>
                <div className='xl:max-w-[1100px] flex-col md:flex-row gap-9 md:gap-0 w-[90%] pb-[50px]  flex justify-between'>

                    <div className='w-full md:w-[45%] flex flex-col justify-center'>
                        <h1 className='font-sambung text-[30px] md:text-[36px] text-center md:text-start'>Coffee is the best drink in the morning, it keeps you focused.</h1>
                        <p className='mt-5 text-center font-poppins md:text-start'>Jhon Doe</p>
                    </div>
                    <div className='w-full md:w-[45%] flex items-center'>
                        <img src={coffe} alt="" className='w-full md:w-[90%]' />
                    </div>
                </div>
            </div>
        </div>
    )
}
