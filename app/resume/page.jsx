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
  title:"About me",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias, eius ea earum autem quaerat ipsum magnam!",
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
      title:'My experience',
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias, eius ea earum autem quaerat ipsum magnam!",
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
      ]
    }

     //education data
     const education = {
      icon:'/assets/resume/badge.svg',
      title:'My experience',
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias, eius ea earum autem quaerat ipsum magnam!",
      items: [
        {
          institution:"University of North Florida.",
          degree:"Fullstack Developer",
          duration:"2021-present"
        },
        {
          institution:"University of North Florida.",
          degree:"Fullstack Developer",
          duration:"2021-present"
        },
        {
          institution:"University of North Florida.",
          degree:"Fullstack Developer",
          duration:"2021-present"
        },
      ]
    }

    //skills data
    const skills = {
      title: "My skills",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias, eius ea earum autem quaerat ipsum magnam!",
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
          name: "node js"
        },
        {
          icon: < SiTailwindcss />,
          name: "node js"
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
      <div className="container mx-auto">
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
              experience
            </TabsContent>
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
      </motion.div>
  )
}

export default resume