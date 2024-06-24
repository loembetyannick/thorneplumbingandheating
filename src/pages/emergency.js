import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Emergency = () => {
  return (
    <div>
        <Header/>
        <Banner title={'Emergency Call Outs'} cover={'/plumbing-3.webp'}/>
        <div className='w-full flex justify-center pb-4 flex-col items-center'>
            <div className='flex items-center justify-center p-16 pb-0 font-bold'>
                <p className='text-[#00000075] text-center text-3xl'>
                {`At Thorne Plumbing and Heating Services Ltd, we understand that emergencies can happen at any time, often when you least expect them. That's why we offer prompt and reliable emergency call-out services to address urgent issues with your plumbing, heating, or gas systems. Our team of experienced and certified technicians is available 24/7 to provide immediate assistance, ensuring your safety and peace of mind.`}
                </p>
          </div>
        </div>
        <div className='w-full border-2 grid grid-cols-1 sm:grid-cols-1 gap-4 pt-8 p-8'>
            <div className='bg-gray-500 h-72 flex items-center justify-center flex-col'>
                <div>
                    <p className='text-white text-xl font-bold'>{`24/7 Availability`}</p>
                </div>
                <div className='p-8 pt-2'>
                    <p className='pb-2 text-white font-light'>{`• Round-the-Clock Service: No matter the time of day or night, our team is ready to respond to your emergency calls and provide the necessary assistance.`}</p>
                    <p className='pb-2 text-white font-light'>{`• Rapid Response Time: We prioritize emergency situations and strive to reach your location as quickly as possible to mitigate damage and restore functionality.`}</p>                
                  </div>
            </div>
            <div className='bg-gray-600 h-72 flex items-center justify-center flex-col'>
                <div>
                    <p className='text-white text-xl font-bold'>{`Emergency Plumbing Services`}</p>
                </div>
                <div className='p-8 pt-2'>
                    <p className='pb-2 text-white font-light'>{`• Leak Detection and Repair: We quickly identify and fix leaks, preventing water damage and high utility bills.`}</p>
                    <p className='pb-2 text-white font-light'>{`• Burst Pipe Repair: Our experts can repair or replace burst pipes, ensuring your water supply is restored promptly.`}</p>
                    <p className='pb-2 text-white font-light'>{`• Clogged Drains and Sewers: We address severe clogs and backups to keep your plumbing system running smoothly.`}</p>
                </div>
            </div>
            <div className='bg-gray-700 h-72 flex items-center justify-center flex-col'>
                <div>
                    <p className='text-white text-xl font-bold'>{`Comprehensive Safety Inspections`}</p>
                </div>
                <div className='p-8 pt-2'>
                    <p className='pb-2 text-white font-light'>{`• Immediate Assessments: Upon arrival, our technicians conduct thorough assessments to identify the root cause of the emergency and determine the best course of action.`}</p>
                    <p className='pb-2 text-white font-light'>{`• Preventative Measures: We provide recommendations and solutions to prevent future emergencies and ensure the long-term safety and reliability of your systems.`}</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Emergency