import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='w-full p-8 bg-gray-700 flex flex-row justify-between items-center flex-wrap'>
        <div>
            <p className='text-white'>© 2024 THORNE PLUMBING AND HEATING SERVICES - All rights reserved</p>
        </div>
        <div className=''>
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