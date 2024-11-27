import React, { Children } from 'react'

export const Crl = ({nomer,img,Children}) => {
  return (
    <div className='size-[190px] relative rounded-full bg-coklatelips flex justify-center items-center'>
        <div className='size-[75px] rounded-full bg-coklatbutton border-[8px] border-coklatbg absolute top-0 text-xl text-coklatfooter font-semibold left-[-10%] grid place-content-center'>
            {nomer}
        </div>
        <img src={img} alt="" className='w-[90%]' />
       
    </div>
  )
}
