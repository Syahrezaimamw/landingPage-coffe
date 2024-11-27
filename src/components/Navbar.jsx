import React from 'react'
import logo from '../images/logo.png'
import line from '../images/line.png'
import { Link, animateScroll as scroll } from "react-scroll";

export const Navbar = () => {
  return (
    <div className='w-full bg-coklatbg h-[70px] relative   flex items-center justify-center' id='section1'>
      <div className='flex items-center justify-center md:justify-between xl:max-w-[1100px] w-[90%]'>
        <img src={logo} alt="" className='' />

        <ul className='items-center hidden gap-10 md:flex font-sambung'>
          <li className='cursor-pointer text-coklatbutton'>
          <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >

            Home
            </Link>
          </li>
          <li className='text-white cursor-pointer'>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >

              About
            </Link>
          </li>
          <li className='text-white cursor-pointer'>
          <Link
              activeClass="active"
              to="steps"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >

            Steps
            </Link>
            </li>
          <li className='text-white cursor-pointer'>
          <Link
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >

            
            Testimonial
            </Link>
            </li>
        </ul>
      </div>
      <img src={line} alt="" className='absolute bottom-0 w-full h-[2px]' />
    </div>
  )
}
