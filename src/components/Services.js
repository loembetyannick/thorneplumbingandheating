import React from 'react'

const Services = ({text, cover}) => {
  return (
    <div 
      style={{
          backgroundImage: `url('/${cover}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
      }}
    className='border-2 pl-4 rounded-lg bg-black h-48 flex flex-row items-center justify-center '>
        <p className='text-white text-3xl font-bold text-center'>{text}</p>
    </div>
  )
}

export default Services