import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Heating = () => {
  return (
    <div>
        <Header/>
        <Banner title={'Heating'} cover={'/plumbing-1.jpeg'}/>
        <div className='w-full flex justify-center pb-4 flex-col items-center'>
            <div className='flex items-center justify-center p-16 pb-0 font-bold'>
                <p className='text-[#00000075] text-center text-3xl'>
                {`At Thorne plumbing and Heating Services Ltd, we understand the importance of a reliable and efficient heating system to keep your home or business warm and comfortable during the colder months. Our team of experienced and certified technicians is committed to providing top-quality heating services, including installation, repair, and maintenance. Whether you need a new heating system or emergency repairs, we are here to help.`}</p>
            </div>
        </div>
        <div className='w-full border-2 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 p-8'>
            <div className='bg-gray-500 h-72 flex items-center justify-center flex-col'>
                <div>
                    <p className='text-white text-xl font-bold'>{`Heating System Installation`}</p>
                </div>
                <div className='p-8 pt-2'>
                    <p className='pb-2 text-white font-light'>{`• Furnace Installation: We install high-efficiency furnaces to ensure your home stays warm and your energy bills stay low.`}</p>
                    <p className='pb-2 text-white font-light'>{`• Boiler Installation: Our experts can install modern boilers that provide consistent and efficient heating.`}</p>
                </div>
            </div>
            <div 
                 style={{
                    backgroundImage: "url('/plumbing-9.jpeg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                className='h-72 flex items-center justify-center'>
                <p className='text-white'></p>
            </div>
            <div className='bg-gray-600 h-72 flex items-center justify-center flex-col'>
                <div>
                    <p className='text-white text-xl font-bold'>{`Heating System Repair`}</p>
                </div>
                <div className='p-8 pt-2'>
                    <p className='pb-2 text-white font-light'>{`• Furnace Repair: We diagnose and repair all types of furnace issues to restore your home's heating quickly.`}</p>
                    <p className='pb-2 text-white font-light'>{`• Heat Pump Repair: We handle all heat pump repairs, from minor issues to major malfunctions, to keep your system running smoothly.`}</p>
                </div>
            </div>
            <div
                 style={{
                    backgroundImage: "url('/plumbing-10.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} 
                className='h-72 flex items-center justify-center'>
                <p className='text-white'></p>
            </div>
            <div className='bg-gray-700 h-72 flex items-center justify-center flex-col'>
                <div>
                    <p className='text-white text-xl font-bold'>{`Energy-Efficient Upgrades`}</p>
                </div>
                <div className='p-8 pt-2'>
                    <p className='pb-2 text-white font-light'>{`• System Upgrades: Upgrade your old heating system to a new, energy-efficient model to reduce your energy bills and increase comfort.`}</p>
                    <p className='pb-2 text-white font-light'>{`• Smart Thermostats: Improve your heating system's efficiency with smart thermostats that provide precise temperature control and remote access.`}</p>
                </div>
            </div>
            <div 
                style={{
                    backgroundImage: "url('/plumbing-11.jpeg')",
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

export default Heating