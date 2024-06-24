import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='w-full p-8 bg-gray-700 flex flex-row justify-between items-center flex-wrap'>
        <div>
            <p className='text-white'>© 2024 THORNE PLUMBING AND HEATING SERVICES - All rights reserved</p>
        </div>
        <div className='flex flex-row items-center'>
            <Image
                src="/gassafe.png"
                alt="TPH Logo"
                width={50}
                height={50}
                style={{paddingRight:20}}
            />
            <a href='https://www.facebook.com/people/Thorne-Plumbing-and-Heating-Services-Ltd/100067076605138/?sk=photos' target="_blank">
                <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: "white", fontSize: 30 }}
                />
            </a>
        </div>
    </div>
  )
}

export default Footer