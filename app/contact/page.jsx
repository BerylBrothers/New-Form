"use client";

import React from 'react'

import {Button} from "../../components/ui/button";
import {Input} from "../../components/ui/input";
import {Textarea} from "../../components/ui/textarea";

import {Select, SelectItem, SelectContent,
   SelectGroup, SelectLabel, SelectTrigger, 
   SelectValue} from "../../components/ui/select";

   import { motion } from 'framer-motion';

   import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';

   const info = [
    {icon: <FaPhoneAlt />,
      title:"Phone",
      description:"904-477-8782"
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

const contact = () => {
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 2.4, duration:0.4, ease:"easeIn"},}} className='py-6'>
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form */}
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className="flex flex-col gap-6 p-10 bg-blue-600 rounded-xl">
              <h3 className='text-white'>Let's Work Together!</h3>
              <p>Lorem, ipsum dolor sit amet 
                consectetur adipisicing elit. Reprehenderit voluptatibus sapiente similique error sed.</p>
                {/* input */}
                <div className='text-white grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <Input type="firstname" placeholder="Firstname" />
                  <Input type="lastname"  placeholder="Lastname" />
                  <Input type="email" placeholder="Email Address" />
                  <Input type="phone" placeholder="Phone Number" />
                </div>
                <Select>
                  <SelectTrigger className="w-full rounded-xl">
                    <SelectValue placeholder="Select a service"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">UI/UX</SelectItem>
                      <SelectItem value="mst">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* Text Area */}
                <Textarea className="h-[200px]" placeholder="Type your message here."/>
                {/* button */}
                <Button size="md" className="max-w-40 bg-white hover:bg-primary hover:text-white">Send Message</Button>
              </form>
          </div>
          {/* info */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
          <ul className='flex flex-col gap-10'>
            {info.map((item, index) => {
              return <li key={index} className='flex items-center gap-6'>
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-blue-600 rounded-xl flex items-center justify-center">
                  <div className='text-[28px]'>{item.icon}</div>
                </div>
                <div className='flex-1 '>
                  <p>{item.title}</p>
                  <h3 className='text-xl'>{item.description}</h3>
                </div>
              </li>
            })}
          </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default contact