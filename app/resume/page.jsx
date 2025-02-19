"use client";

import {
  FaHtml5,
  FaCss3, FaJs, FaReact, FaFigma, FaNodeJs
} from "react-icons/fa";

import {
SiTailwindcss, SiNextdotjs
} from "react-icons/si";

//about data
const about = {
  title:"About Me",
  description:"I'm Daniel Collins",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Daniel Collins"
    },
    {
      fieldName: "Phone",
      fieldValue: "904-477-8782"
    },
    {
      fieldName: "Experience",
      fieldValue: "6+ years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "American"
    },
    {
      fieldName: "Email",
      fieldValue: "Daniel@Berylbrothers.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
  

  ]
}

    //experience data
    const experience = {
      icon:'/assets/resume/cap.svg',
      title:'My Experience',
      description:"As a web developer, I specialize in building dynamic, responsive websites using modern technologies like React, Figma, and Next.js for front-end development. I also work with server-side tools such as Node.js and Express, and database systems like MongoDB and PostgreSQL, to create full-stack applications.",
      items: [
        {
          company:"Beryl Brothers Inc.",
          position:"Fullstack Developer",
          duration:"2021-present"
        },
        {
          company:"Beryl Brothers Inc.",
          position:"Fullstack Developer",
          duration:"2021-present"
        },
        {
          company:"Beryl Brothers Inc.",
          position:"Fullstack Developer",
          duration:"2021-present"
        },
        {
          company:"Beryl Brothers Inc.",
          position:"Fullstack Developer",
          duration:"2021-present"
        },
        {
          company:"Beryl Brothers Inc.",
          position:"Fullstack Developer",
          duration:"2021-present"
        },
      ]
    }

     //education data
     const education = {
      icon:'/assets/resume/badge.svg',
      title:'My Education',
      description:"I completed my Bachelor's degree in Information Science at the University of North Florida (UNF), where I studied for four years. During my time there, I gained a strong foundation in technology, data management, and problem-solving, equipping me with the skills needed for a successful career in web development and IT.",
      items: [
        {
          institution:"University of North Florida.",
          degree:"Computer Science",
          duration:"2022-present"
        },
        {
          institution:"University of North Florida.",
          degree:"A+ Certificate",
          duration:"2019-present"
        },
        {
          institution:"University of North Florida.",
          degree:"Associates degree",
          duration:"2018-present"
        },
      ]
    }

    //skills data
    const skills = {
      title: "My Skills",
      description:"I have hands-on experience with a variety of modern web development technologies, including Next.js, React, and Node.js for building dynamic applications. I’m skilled in front-end design using HTML5, CSS3, and Tailwind, as well as back-end development with .NET Core and C#. I’m also proficient in using Figma for UI/UX design, allowing me to create seamless and visually appealing user interfaces.",
      SkillList:[
        {
          icon: < FaHtml5 />,
          name: "html 5"
        },
        {
          icon: < FaCss3 />,
          name: "css 3"
        },
        {
          icon: < FaJs />,
          name: "javascript"
        },
        {
          icon: < FaReact />,
          name: "react"
        },
        {
          icon: < FaFigma />,
          name: "figma"
        },
        {
          icon: < FaNodeJs />,
          name: "node js"
        },
        {
          icon: < SiNextdotjs />,
          name: "next js"
        },
        {
          icon: < SiTailwindcss />,
          name: "tailwind"
        },
      ]
    }

    import {Tabs, TabsContent, TabsList, TabsTrigger} from '../../components/ui/tabs';

    import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";

    import { ScrollArea } from "../../components/ui/scroll-area";

    import { motion } from "framer-motion";



import React from 'react'

const resume = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 2.4, duration:0.4, ease:"easeIn"},}}
    className="min-h-[80vh] flex flex-col justify-center py-6 xl:py-0"
    >
      <div className="container mx-auto xl:py-6">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3>{experience.title}</h3>
                <p className="max-w-[600px] mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return <li key={index} className=" bg-blue-600 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1]">
                        <span className="text-white">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-white"></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3>{education.title}</h3>
                <p className="max-w-[600px] mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return <li key={index} className=" bg-blue-600 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1]">
                        <span className="text-white">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-white"></span>
                          <p>{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3>{skills.title}</h3>
                <p className="max-w-[600px] mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.SkillList.map((item, index) => {
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[150px] bg-blue-600 rounded-xl flex justify-center items-center group">
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                          {item.icon}
                          </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{item.name}</p>
                      </TooltipContent>
                    </Tooltip>
                    </TooltipProvider>
                    </li>
                })}
              </ul>
            </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3>{about.title}</h3>
              <p className="max-w-[600px] mx-auto xl:mx-0" >{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">{about.info.map((item, index) => {
                return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                  <span className="font-bold">{item.fieldName}</span>
                  <span className="font-semibold">{item.fieldValue}</span>
                </li>
              })}</ul>
            </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      </motion.div>
  )
}

export default resume