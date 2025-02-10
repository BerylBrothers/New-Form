import React from 'react'
import Link from 'next/link'
import {Button} from "./ui/button"
import Nav from "../components/Nav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-red-50/20">
      <div className='container mx-auto'>
      {/* logo */}
     <Link href={"/"}>
     <h1 className='text-4xl'>
      Daniel <span className='text-accent'>.</span>
     </h1>
     </Link>
     {/* desktop nav & hire me button*/}
     <div className="hidden xl:flex">
     <Nav />
     <Link href="/contact">
     <Button>Hire me</Button>
     </Link>
     </div>

     {/* mobile nav */}
     <div className='xl:hidden flex'>mobile nav</div>
     
     </div>
      </header>
  )
}

export default Header