import React from 'react';
import Link from 'next/link';
import {FaGithub, FaLinkedin, FaYoutube} from 'react-icons/fa'

const icons = [
    {icon:<FaGithub />, path: ''},
    {icon:<FaLinkedin />, path: ''},
    {icon:<FaYoutube />, path: ''},
]

const Socials = ({containerStyles, IconStyles}) => {
  return (
    <div className={containerStyles}>
        {icons.map((item, index) => {
           return <Link href={item.path} key={index} className={IconStyles}>{item.icon}</Link>
        })}
    </div>
  )
}

export default Socials