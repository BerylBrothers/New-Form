"use client";

import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'
import {usePathname} from "next/navigation";

const links = [
    {
        name:"home",
        path:"/",
    } ,
    {
        name:"services",
        path:"/services",
    },
    {
        name:"resume",
        path:"/resume",
    },
    {
        name:"work",
        path:"/work",
    },
    {
        name:"contact",
        path:"/contact",
    },
]

const info = [
    {icon: <FaPhoneAlt />,
      title:"Phone",
      description:"555-555-5555"
    },
    {icon: <FaEnvelope />,
      title:"Envelope",
      description:"Daniel@BerylBrothers.com"
    },
    {icon: <FaMapMarkerAlt />,
      title:"Address",
      description:"1547 database dr, Boston, MA"
    },
   ]


const Footer = () => {
    const pathname = usePathname();
  
    return (
      <footer className='py-8 xl:py-8 text-white bg-primary'>
        <div className="container mx-auto grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Image Column */}
          <div className="flex justify-center xl:justify-start items-center mb-8 xl:mb-0">
            <Link href={"/"}>
              <Image
                src={'/assets/logo-transparent.png'}
                height={100}
                width={100}
                alt="Logo"
                className='bg-white object-contain rounded-xl'
              />
            </Link>
          </div>

          {/* Links Column */}
          <div className="flex justify-center items-center xl:items-start xl:justify-start flex-col space-y-4 mb-8 xl:mb-0">
            <h3 className="text-xl font-bold">Quick Links</h3>
            {links.map((item, index) => (
              <Link key={index} href={item.path} className="capitalize text-lg hover:text-accent transition-all duration-300">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Column */}
          <div className="flex items-center xl:items-start justify-center xl:justify-start flex-col space-y-4">
            <h3 className="text-xl font-bold xl:items-center">Contact</h3>
            <div className="flex-1">
              <ul className='flex flex-col gap-6 xl:items-start items-center'>
                {info.map((item, index) => (
                  <li key={index} className='flex gap-4'>
                    <div className="text-blue-600 rounded-xl flex items-center justify-center">
                      <div>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <div>{item.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
}
  
export default Footer;