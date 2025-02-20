import React from 'react'
import Link from 'next/link'
import {Button} from "./ui/button"
import Nav from "../components/Nav"
import MobileNav from './MobileNav'
import Image from 'next/image'

// bg-[#42a5f5]

const Header = () => {
  return (
    <header className="py-8 xl:py-6 text-white bg-primary">
      <div className='container mx-auto flex justify-between items-center'>
      {/* logo */}
     <Link href={"/"}>
     {/* {<h1 className='text-4xl'>
      Daniel <span className='text-accent'>.</span>
     </h1> */}
       <Image 
       src={'/assets/logo-transparent.png'}
       height={100}
       width={100}
       alt=""
       className='bg-white object-contain rounded-xl'
       />
     </Link>

    

     {/* desktop nav & hire me button*/}
     <div className="hidden xl:flex gap-8">
     <Nav />
     <Link href="/contact">
     <Button className="bg-white">Hire me</Button>
     </Link>
     </div>

     {/* mobile nav */}
     <div className='xl:hidden flex'><MobileNav /></div>
     
     </div>
      </header>
  )
}

export default Header