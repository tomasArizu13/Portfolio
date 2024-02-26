import React from 'react'
import { github } from "../assets";
import { instagram } from "../assets";
import { linkedin } from "../assets";
import { x } from "../assets";


const Footer = () => {
  return (
    <div className='flex gap-10'>
    
    <a
    href='https://github.com/tomasArizu13'
    >
    <img
    src={ github}
    alt='source code'
    className='w-12 h-12 object-contain'
    />
    </a>

    <a
    href='https://www.instagram.com/tomasarizu/'
    >
    <img
    src={instagram}
    alt='source code'
    className='relative w-11 h-11 overflow-hidden object-contain rounded-full bg-white '
    />
    </a>

    <a
    href='https://www.linkedin.com/in/tomas-arizu-47ba1521a/'
    >
    <img
    src={linkedin}
    alt='source code'
    className='relative w-11 h-11 overflow-hidden object-contain rounded-full bg-white '
    />
    </a>
  </div>
  )
}

export default Footer