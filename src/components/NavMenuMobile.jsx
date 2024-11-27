import React from 'react'
import { Icon } from '@iconify/react';
import './icon.css'
import homeic from '../images/homeic.png'
import dotic from '../images/dotic.png'
import chatic from '../images/chatic.png'
import navic from '../images/navic.png'
import { Link, animateScroll as scroll } from "react-scroll";

export const NavMenuMobile = () => {
    return (
        <div className='fixed bottom-0 w-full md:hidden'>
            <div className='w-full h-[90px] flex justify-center items-center rounded-t-[60px] bg-coklatelips' style={{ backgroundImage: "linear-gradient(to bottom,#DDB66F -55%,#65463E 3%, #492D26,#2B1712 120%)" }}>
                <div className='flex items-center justify-center gap-[65px] mt-1'>
                    <div className='flex flex-col items-center justify-center'>
                    <Link
              activeClass="active"
              to="home"
              spy={true}
              className='flex flex-col items-center justify-center'

              smooth={true}
              offset={-70}
              duration={1000}
            >
                
                        <img src={homeic} alt=""  />
                        <p className='mt-1 font-sambung text-[11px] text-coklatbutton'>Home</p>
            </Link>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <Link
              activeClass="active"
              to="about"
              className='flex flex-col items-center justify-center'

              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
                
                        <img src={dotic} alt=""  />
                        <p className='mt-1 text-white font-sambung font-[100] text-[11px]'>About</p>
            </Link>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <Link
              activeClass="active"
              to="steps"
              className='flex flex-col items-center justify-center'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >

                        <img src={navic} alt=""  />
                        <p className='mt-1 text-white font-sambung font-lig text-[11px]'>Steps</p>
            </Link>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <Link
              activeClass="active"
              to="testimoni"
              className='flex flex-col items-center justify-center'

              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
                
                        <img src={chatic} alt=""  />
                        <p className='mt-1 text-white font-sambung text-[11px] ont-lig'>Testimonial</p>
            </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
