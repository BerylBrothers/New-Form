"use client";

import { useState } from 'react';
import {Sheet, SheetContent, SheetTrigger, SheetTitle} from "../components/ui/sheet";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";
import Image from "next/image"
import React from 'react'

const links = [
    {
        name:'home',
        path:'/'
    },
    {
        name:'services',
        path:'/services'
    },
    {
        name:'resume',
        path:'/resume'
    },
    {
        name:'work',
        path:'/work'
    },
    {
        name:'contact',
        path:'/contact'
    }
]




const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false); // Track if the sheet is open
    const pathname = usePathname();

    // Handle closing the sheet when a link is clicked
    const handleLinkClick = () => {
        setIsOpen(false); // Close the sheet
    };
  return <Sheet open={isOpen} onOpenChange={setIsOpen}>
    <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-white"/>
    </SheetTrigger>
    <SheetContent className="flex flex-col">
        {/* logo */}
        <SheetTitle className="mt-24 mb-40 text-center text-2xl justify-center">
        <Link href={"/"} className=' flex justify-center'>
     {/* {<h1 className='text-4xl'>
      Daniel <span className='text-accent'>.</span>
     </h1> */}
       <Image 
       src={'/assets/logo-transparent.png'}
       height={100}
       width={100}
       alt=""
       className='flex bg-white object-contain rounded-xl justify-center'
       />
     </Link>
        </SheetTitle>
        {/* navigation */}
        
        <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index)=>{
                return <Link href={link.path} key={index} onClick={handleLinkClick} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>{link.name}</Link>
            })}
        </nav>
     
    </SheetContent>
  </Sheet>
}

export default MobileNav