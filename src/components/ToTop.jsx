import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa6";
import { Link, animateScroll as scroll } from "react-scroll";
export const ToTop = () => {
   
  return (
    <div className='size-[45px]  grid place-content-center rounded-full fixed bottom-[100px] md:bottom-[30px] right-[20px] md:right-[30px] poin'  style={{ backgroundImage: "linear-gradient(to bottom,#DDB66F -55%,#65463E 3%, #492D26,#2B1712 120%)" }}>
        <Link
    activeClass="active"
    to="section1"
    spy={true}
    smooth={true}
    offset={-70}
    duration={1000}
>
    

        <FaArrowUp className='text-white'/>
</Link>

    </div>
  )
}
