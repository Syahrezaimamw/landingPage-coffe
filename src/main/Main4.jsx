import React from 'react'
import { Crl } from '../components/Crl'
import satu from '../images/st1.png'
import dua from '../images/st2.png'
import tigas from '../images/st3.png'
import bgcoffe from '../images/bg-coffee-beans 1.png'
import lengkung from '../images/lengkung.png'
export const Main4 = () => {
  return (
    <div className='w-full bg-white' id='steps'>
        <div className='rounded-t-[50px] relative overflow-hidden bg-coklatbg pb-[50px] w-full flex justify-center'>
            <img src={bgcoffe} alt="" className='absolute w-[100%] ' />
            <div className='xl:max-w-[1100px] w-[90%] pt-[50px]'>
                <h1 className='text-center text-white font-sambung  text-[29px]'>Steps of manufacturing our products</h1>
                <div className='flex flex-col justify-start  md:justify-between gap-8 md:ga-0 w-full mt-[50px] text-white relative'>
                    <img src={lengkung} alt="" className='absolute left-[25%] top-[29%] hidden md:block ' />
                    <div className='flex flex-col items-center gap-3'>
                        <Crl nomer='01' img={     satu
}>
                        </Crl>
                        <p className='font-poppins w-[65%] text-[15px]'>Harvest occurs annually when the coffee beans reach maturity and are collected for processing.</p>
                    </div>
                    <div  className='flex md:flex-col items-center gap-3 md:mt-[110px] flex-col-reverse'>
                        <p className='font-poppins text-[15px] w-[65%]'>The beans are dried using a wet or dry technique, depending on the taste we want to obtain.</p>
                        <Crl nomer='02' img={dua
}>

                        </Crl>
                    </div>
                    <div  className='flex flex-col items-center gap-3'>
                        <Crl nomer='03' img={tigas}>
                       

                        </Crl>
                        <p className='font-poppins text-[15px]  w-[65%]'> The coffee is roasted and acquires its flavor by processing the grain in ovens.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
