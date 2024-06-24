import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

const Jumbotron = () => {
  return (
    <div 
        style={{
            backgroundImage: "url('/plumbing-bg.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
        className=" text-white py-20 pb-0 pt-0 px-10"
        >
        <div className='flex flex-row justify-between item-center pb-16'>
            <Link href='/'>
            <Image
                src="/tphlogo.png"
                alt="TPH Logo"
                width={100}
                height={100}
            />
            </Link>
            <div className='flex justify-between items-center'>
                <Link href='/'>
                <p className='pr-4 text-lg text-white'>Home</p>
                </Link>
                <Link href='/contact'>
                <p className='pr-4 text-lg text-white'>Contact</p>
                </Link>
            </div>
        </div>
        <div className='pb-8 text-center'>
            <h1 className="text-6xl font-bold mb-4">THORNE PLUMBING & HEATING SERVICES</h1>
            <p className="text-2xl mb-2">PLUMBING | HEATING | GAS | INSTALLATIONS</p>
        </div>
        <div className='w-full flex justify-center items-center pb-20'>
            <Link href='contact'>
                <p className='p-4 rounded-full text-2xl text-white px-10 bg-[#ffffff50] border-white border-2'>Get A Quote</p>
            </Link>
        </div>
        <div className='flex flex-row w-full justify-between pb-6 flex-wrap'>
            <p className='text-lg'>thorneplumbingandheating@outlook.com</p>
            <p  className='text-lg'>07760 434691</p>
        </div>
    </div>
  );
}

export default Jumbotron;