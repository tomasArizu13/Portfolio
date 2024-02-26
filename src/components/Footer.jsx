import React from 'react'
import { github } from "../assets";
import { instagram } from "../assets";
import { linkedin } from "../assets";
import { Cv } from "../assets";


const Footer = () => {
  return (
    <div className='flex gap-10'>
    
    <a
    href='https://github.com/tomasArizu13'
    target='_blank'
    >
    <img
    src={ github}
    alt='source code'
    className='w-12 h-12 object-contain'
    />
    </a>

    <a
    href='https://www.instagram.com/tomasarizu/'
    target='_blank'
    >
    <img
    src={instagram}
    alt='source code'
    className='relative w-11 h-11 overflow-hidden object-contain rounded-full bg-white '
    />
    </a>

    <a
    href='https://www.linkedin.com/in/tomas-arizu-47ba1521a/'
    target='_blank'
    >
    <img
    src={linkedin}
    alt='source code'
    className='relative w-11 h-11 overflow-hidden object-contain rounded-full bg-white '
    />
    </a>
    <a
    
    href='https://pdfsimpli.com/es/userdocument/view-b?ofn=CV%20Arizu%20Tomas.pdf&unqn=CVArizuTomas_ee2d319ccdb64e859972c4beb7475d98.pdf&frm=pdf&to=DOC&fskb=221&npdf=CVArizuTomas_ee2d319ccdb64e859972c4beb7475d98.pdf'
    target='_blank'
    >
    <img
    src={Cv}
    alt='source code'
    className='relative w-11 h-11 overflow-hidden object-contain rounded-full bg-white '
    />
    </a>
  </div>
  )
}

export default Footer