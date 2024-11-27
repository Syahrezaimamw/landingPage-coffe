import React from 'react'
import coffe from '../images/coffe.png'
import { FaAngleRight } from "react-icons/fa6";
import hc from '../images/home-coffee.png'
export const Main1 = () => {
    return (
        <div className='flex justify-center w-full ' id='home' style={{ backgroundImage: "linear-gradient(to bottom,#4B2C24 , #2B1712 85%)" }}>
            <div className='max-w-[1100px] w-full mt-12 flex md:w-[100%] md:flex-row flex-col-reverse  lg:w-[90%] '>
                <div className='flex items-center justify-center w-full pb-3 mt-10 md:mt-0 md:p-0 md:w-1/2'>
                    <img src={hc} alt="" className='w-[360px] me-1 sm:w-[380px]  ' />

                </div>
                <div className='flex items-center justify-center w-full md:justify-end md:w-1/2'>
                    <div className=' font-poppins flex gap-2 md:gap-0 flex-col items-center md:inline-block md:w-[80%] md:me-10'>
                        <p className='text-md text-coklatbutton font-poppins '>EXCEPTIONAL QUALITY</p>
                        <div className='text-white font-sambung  text-[54px] md:text-[50px]'>
                            <h1 className='text-center md:text-start'>It's time for a </h1>
                            <h1 className='flex items-center text-center lg:-mt-3 md:text-start'>good coffee <img src={coffe} alt="" /></h1>
                        </div>
                        <p className='mt-5 text-[15px] font-poppins w-[80%] xl:w-[92%]  max-w-[500px] text-white text-center md:text-start'>Each select coffee bean reflects our commitment to Peruvian coffee growers, who bring the best select coffee to your table.</p>
                        <button className='flex items-center gap-3 py-3 font-medium rounded-full mt-7 px-7 font-poppins bg-coklatbutton text-th' style={{ boxShadow: "0px 10px 20px rgba(221, 182, 111,0.3)" }}>
                            <p className='font-[500] font-poppins'>Get Started</p> <FaAngleRight /></button>
                    </div>
                </div>

            </div>

        </div>

    )
}


{/* <div className='w-full   flex justify-center pt-[50px] lg:py-[80px]' style={{ backgroundImage: "linear-gradient(to bottom,#4B2C24 , #2B1712 85%)" }}>
<div className='flex-row-reverse xl:w-[70%]  md:flex'>
    <div className='flex items-center justify-end md:relative md:w-1/2'>
        <div className='gap-3 xl:w-[90%] md:relative left-[10%] lg:left-[5%]'>

            <p className='text-coklatbutton text-[17px] font-poppins uppercase'>Exceptional quality</p>
            <div className=''>

                <h1 className=' text-white font-sambung text-[54px] '>it's time for a</h1>
                <h1 className='flex text-[54px] text-white font-sambung'>good coffe <span className='mt-2 ms-2'> <img src={coffe} alt="" /> </span></h1>

            </div>
            <p className='text-center  text-white md:text-start font-poppins xl:w-[78%] lg:w-[90%]'>Each select coffee bean reflects our br commitment to Peruvian coffee growers, who bring the best select coffee to your table.</p>
            <button className='flex items-center gap-3 py-3 mt-3 font-medium rounded-full px-7 font-poppins bg-coklatbutton text-th' style={{ boxShadow: "0px 10px 20px rgba(221, 182, 111,0.3)" }}>
                <p className='font-[500] font-poppins'>Get Started</p> <FaAngleRight /></button>
        </div>
    </div>
    <div className='relative pt-10 md:w-1/2'>
        <img src={hc} alt="" className='m-auto md:m-0 w-[100px] md:w-[350px] xl:w-[380px]  lg:absolute top-[-50px] right-[10%]' />
    </div>
</div>

</div> */}