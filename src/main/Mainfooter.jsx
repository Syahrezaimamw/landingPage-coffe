import React from 'react'
import logo from '../images/logo.png'
import { FaAngleRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import bgco from '../images/bg-coffee-beans 1.png'
export const Mainfooter = () => {
    return (
        <div className='w-full bg-white' id='testimoni'>
            <div className='rounded-t-[50px] relative overflow-hidden bg-[#2B1712] pt-[60px] flex flex-col items-center'>
                <div className='xl:max-w-[1100px] flex-col md:flex-row gap-9 md:gap-0 w-[90%] pb-[50px]  flex justify-between'>

                    <div className='flex flex-col items-center justify-start w-full md:items-start md:w-1/2'>
                        <img src={logo} alt="" className='w-[20%]' />
                        <p className='mt-5 text-center text-[25px] text-white font-sambung md:text-start'>Sign up for our newsletter</p>
                    </div>
                    <div className='flex flex-col items-end w-full md:w-1/2 text-[15px] font-poppins gap-5'>
                        <button className='border-[rgba(255,255,255,0.4)] w-full text-[rgba(255,255,255,0.4)] py-3 md:w-[70%] flex justify-start ps-5 rounded-full border-2'>Enter e-mail address</button>
                        <button className='bg-coklatbutton flex items-center py-3 w-full md:w-[70%] gap-2 font-semibold justify-center  rounded-full '>Subscribe <FaAngleRight className='text-[15px]' /></button>
                        <p className='text-white font-poppins me-[28px]'> We care about your data. Read our <span className='text-[#DDB66F]'> Privacy Policy </span></p>
                        {/* <img src={coffe} alt="" className='w-full md:w-[90%]' /> */}
                    </div>
                </div>
                <div className='flex flex-col items-center sw-full pb-[50px] md:mt-[70px]'>
                    <div className='flex items-center gap-8 text-[20px] text-white'>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />

                    </div>
                    <p className='text-[rgba(255,255,255,0.3)] mt-[50px] text-[15px]'>
                        &copy; Copyright Bedimcode. All rights reserved
                    </p>
                </div>
                <img src={bgco} alt=""  className='absolute w-[90%] top-[-50px]'/>
            </div>
        </div>
    )
}
