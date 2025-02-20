"use client";

import {BsArrowDownRight} from 'react-icons/bs'
import Link from 'next/link'
import {motion} from 'framer-motion'

import React from 'react'

const services = [
  {
    num:'01',
    title:'Web Development',
    description:
    "I specialize in creating dynamic, user-friendly websites and web applications that help businesses stand out online. Whether you need a simple landing page, a robust e-commerce platform, or a complex web app, I use modern technologies like React, Next.js, Node.js, and Tailwind CSS to build responsive, fast-loading, and visually appealing websites.",
    href:""
  },{
    num:'02',
    title:'UI/UX Design',
    description:
    "From the initial concept to the final design, I ensure that every project is visually appealing, easy to navigate, and tailored to your target audience. Using tools like Figma, I collaborate with you to define the ideal user flow and interface design, ensuring that every element serves a purpose and enhances the overall user experience.",
    href:""
  },{
    num:'03',
    title:'Logo Design',
    description:
    "A great logo is the cornerstone of your brand identity, and I specialize in creating unique, memorable logos that reflect your business’s values and vision. From minimalist and modern to bold and creative, I work closely with you to design a logo that captures the essence of your brand and makes a lasting impression.",
    href:""
  },{
    num:'04',
    title:'SEO',
    description:
    "I offer comprehensive SEO services designed to help your website rank higher on search engines and attract more organic traffic. From on-page optimization, such as keyword research, meta tags, and content strategy, to technical SEO like site speed improvements, I ensure that every aspect of your site is optimized for better visibility and performance.",
    href:""
  },
]



const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-6 xl:py-0'>
     <div className="container mx-auto">
      <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 2.4, duration:0.4, ease:"easeIn"},}}
      className='grid grid-cols-1 md:grid-cols-2 gap-[60px] p-4'
      >
        {services.map((service, index) =>{
          return <div key={index} className='flex-1 flex-col justify-center gap-6 group'>
            <div className='w-full flex justify-between items-center'>
            <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
            <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
            <BsArrowDownRight className='text-primary text-3xl' />
            </Link>
            </div>
            <h2 className='leading-none py-2 group-hover:text-accent transition-all duration-500'>{service.title}</h2>
             <p>{service.description}</p>
           
            <div className='border-b border-white w-full'></div>
          </div>
        })}
      </motion.div>
     </div>
      </section>
  )
}

export default Services