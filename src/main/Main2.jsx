import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import produk1 from '../images/product-coffee-1.png'
import produk2 from '../images/product-coffee-2.png'
import produk3 from '../images/product-coffee-3.png'
import { CardMain2 } from '../components/CardMain2';
export const Main2 = () => {
  return (
    <div className='w-full pt-[60px] bg-coklatfooter'>
        <div className='w-full pb-[50px] rounded-t-[60px] bg-coklatbg flex justify-center'>
            <div className='xl:max-w-[1100px]  w-[90%] mt-[55px] flex md:flex-row flex-col justify-between pt-4'>
               <div className='md:w-[43%] w-full flex flex-col  items-center md:inline-block '>
               <button className='flex items-center gap-3 py-4 text-white rounded-full px-7 bg-coklatfooter bg-cokl fotn-poppins'>Scroll Down <FaAngleDown className='mt-[2px]'/> </button>
               <p className='mt-5 text-center text-white md:text-start font-poppins w-[95%] '>We strive to form deep partnerships with farmers from all over the world to create perspective together and form healthy working relationships built on trust and respect.</p>
               </div>
               <div className='flex md:w-[50%] w-full gap-8 mt-8 md:mt-0 justify-between flex-wrap'>
               <CardMain2 img={produk1} jenis='Clasic Coffe' harga='$17.90'/>
                    <CardMain2 img={produk2}  jenis='Clasic Coffe' harga='$17.90'/>
                    <CardMain2 img={produk3}  jenis='Clasic Coffe' harga='$17.90'/>
               </div>
                
            </div>
        </div>
    </div>
  )
}

{/* <div className='flex flex-col items-center w-full'>
                    <button className='flex items-center gap-3 py-4 text-white rounded-full px-7 bg-coklatfooter bg-cokl fotn-poppins'>Scroll Down <FaAngleDown className='mt-[2px]'/> </button>
                    <p className='mt-3 text-center text-white w-[70%]'>We strive to form deep partnerships with farmers from all over the world to create perspective together and form healthy working relationships built on trust and respect.</p>
                </div>
                <div className='flex flex-wrap justify-between w-full'>
                    <CardMain2 img={produk1} jenis='Clasic Coffe' harga='$17.90'/>
                    <CardMain2 img={produk2}/>
                    <CardMain2 img={produk3}/>
                    
                </div> */}