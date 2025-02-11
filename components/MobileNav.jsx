"use client";

import {Sheet, SheetContent, SheetTrigger, SheetTitle} from "../components/ui/sheet";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";
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
    const pathname = usePathname();
  return <Sheet>
    <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent"/>
    </SheetTrigger>
    <SheetContent className="flex flex-col">
        {/* logo */}
        <SheetTitle className="text-white">logo</SheetTitle>
    </SheetContent>
  </Sheet>
}

export default MobileNav