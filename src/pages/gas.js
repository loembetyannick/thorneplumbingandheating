import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Gas = () => {
  return (
    <div>
        <Header/>
        <Banner title={'Gas'} cover={'/plumbing-2.jpeg'}/>
        <div className='w-full flex justify-center pb-4 flex-col items-center'>
            <div className='flex items-center justify-center p-16 pb-0 font-bold'>
                <p className='text-[#00000075] text-center text-3xl'>
                At Thorne Plumbing and Heating Services Ltd, we provide a full range of gas services to ensure your home or business operates safely and efficiently. Our team of experienced and certified technicians is dedicated to delivering high-quality gas installation, repair, and maintenance services. Whether you need a new gas line installed, repairs on existing systems, or routine maintenance, we are here to meet all your gas service needs.
                </p>
          </div>
        </div>
        <div className='w-full border-2 grid grid-cols-1 sm:grid-cols-1 gap-4 pt-8 p-8'>
            <div className='bg-gray-500 h-72 flex items-center justify-center flex-col'>
                <div>
                    <p className='text-white text-xl font-bold'>Gas Line Installation</p>
                </div>
                <div className='p-8 pt-2'>
                    <p className='pb-2 text-white font-light'>- New Gas Lines: We install new gas lines for residential and commercial properties, ensuring they meet all safety standards and regulations.</p>
                    <p className='pb-2 text-white font-light'>- Gas Appliance Hookups: Our experts can safely connect gas appliances such as stoves, ovens, water heaters, and fireplaces.</p>
                    <p className='pb-2 text-white font-light'>- Outdoor Gas Lines: We install gas lines for outdoor kitchens, grills, fire pits, and pool heaters, enhancing your outdoor living space.</p>
                </div>
            </div>
            <div className='bg-gray-600 h-72 flex items-center justify-center flex-col'>
                <div>
                    <p className='text-white text-xl font-bold'>Gas Line Repair</p>
                </div>
                <div className='p-8 pt-2'>
                    <p className='pb-2 text-white font-light'>- Leak Detection and Repair: We use advanced equipment to detect and repair gas leaks promptly, ensuring your safety.</p>
                    <p className='pb-2 text-white font-light'>- Pipe Replacement: If your gas pipes are old or damaged, we provide efficient replacement services to restore safety and functionality.</p>
                    <p className='pb-2 text-white font-light'>- Emergency Gas Line Repair: Our team is available 24/7 to handle emergency gas line repairs and prevent potential hazards.</p>
                </div>
            </div>
            <div className='bg-gray-700 h-72 flex items-center justify-center flex-col'>
                <div>
                    <p className='text-white text-xl font-bold'>Gas Appliance Services</p>
                </div>
                <div className='p-8 pt-2'>
                    <p className='pb-2 text-white font-light'>- Gas Appliance Installation: We install a wide range of gas appliances, ensuring they operate safely and efficiently.</p>
                    <p className='pb-2 text-white font-light'>- Appliance Repair and Maintenance: Our technicians provide repair and maintenance services for gas appliances to extend their lifespan and improve performance.</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Gas