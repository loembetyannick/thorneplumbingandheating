import React from 'react'

const Banner = ({title, cover}) => {
  return (
    <div
        style={{
            backgroundImage: `url('${cover}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
        <div className='w-full border-2 grid grid-cols-1 sm:grid-cols-1 gap-4'>
            <div className='h-64 flex items-center justify-center'>
            <p className='text-white text-5xl font-bold'>{title}</p>
            </div>
        </div>
    </div>
  )
}

export default Banner