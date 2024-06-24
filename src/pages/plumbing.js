import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Plumbing = () => {
  return (
    <div>
        <Header/>
        <Banner title={'Plumbing'} cover={'/plumbing-0.jpeg'}/>
        <div className='w-full flex justify-center pb-4 flex-col items-center'>
            <div className='flex items-center justify-center p-16 pb-0 font-bold'>
                <p className='text-[#00000075] text-center text-3xl'>
                {`At Thorne Plumbing and Heating Services Ltd, we offer a wide range of plumbing services designed to meet the needs of both residential and commercial clients. Our team of experienced and licensed plumbers is dedicated to providing top-quality service and ensuring your plumbing systems are functioning efficiently. Whether you need routine maintenance, emergency repairs, or new installations, we've got you covered.`}
                </p>
            </div>
        </div>
        <div className='w-full border-2 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 p-8'>
            <div className='bg-gray-500 h-72 flex items-center justify-center flex-col'>
                <div>
                    <p className='text-white text-xl font-bold'>Emergency Plumbing Repairs</p>
                </div>
                <div className='p-8 pt-2'>
                    <p className='pb-2 text-white font-light'>{`• 24/7 Availability: Plumbing emergencies can happen at any time. Our team is available around the clock to handle any urgent plumbing issues.`}</p>
                    <p className='pb-2 text-white font-light'>{`• Leak Detection and Repair: We quickly identify and fix leaks to prevent water damage and high utility bills.`}</p>
                    <p className='pb-2 text-white font-light'>{`• Burst Pipe Repair: Our experts can repair or replace burst pipes to restore your water supply promptly.`}</p>
                </div>
            </div>
            <div 
                 style={{
                    backgroundImage: "url('/plumbing-6.jpeg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                className='h-72 flex items-center justify-center'>
                <p className='text-white'></p>
            </div>
            <div className='bg-gray-500 h-72 flex items-center justify-center flex-col'>
                <div>
                    <p className='text-white text-xl font-bold'>{`Drain Cleaning`}</p>
                </div>
                <div className='p-8 pt-2'>
                    <p className='pb-2 text-white font-light'>{`• Drain Cleaning: We use advanced techniques and equipment to clear clogged drains and keep your plumbing system running smoothly.`}</p>
                    <p className='pb-2 text-white font-light'>{`• Sewer Line Inspection and Repair: Our state-of-the-art cameras inspect sewer lines to identify issues, and we offer effective repair solutions.`}</p>
                    <p className='pb-2 text-white font-light'>{`• Root Removal: We eliminate tree root intrusions in your sewer lines to prevent blockages and backups.`}</p>
                </div>
            </div>
            <div
                 style={{
                    backgroundImage: "url('/plumbing-7.jpeg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} 
                className='h-72 flex items-center justify-center'>
                <p className='text-white'></p>
            </div>
            <div className='bg-gray-500 h-72 flex items-center justify-center flex-col'>
                <div>
                    <p className='text-white text-xl font-bold'>{`Boiler Installation and Repair`}</p>
                </div>
                <div className='p-8 pt-2'>
                    <p className='pb-2 text-white font-light'>{`• Boiler Installation: Our team installs energy-efficient Boilers tailored to your household or business needs.`}</p>
                    <p className='pb-2 text-white font-light'>{`• Boiler Repair: We diagnose and repair issues with your existing Boiler to ensure consistent hot water supply.`}</p>
                    <p className='pb-2 text-white font-light'>{`• Tankless Boilers: Experience the convenience of endless hot water with our tankless water heater solutions.`}</p>
                </div>
            </div>
            <div 
                style={{
                    backgroundImage: "url('/plumbing-8.jpeg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} 
                className='h-72 flex items-center justify-center'>
                <p className='text-white'></p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Plumbing