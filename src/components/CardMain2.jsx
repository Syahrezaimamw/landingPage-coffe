import React from 'react'

export const CardMain2 = ({img,jenis,harga}) => {
  return (
    <div className='flex flex-col items-center justify-start text-white font-sambung'>
        <img src={img} alt="" />
        <h1>{jenis}</h1>
        <p>{harga}</p>

    </div>
  )
}
