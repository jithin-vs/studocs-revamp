import React from 'react'
import Image from 'next/image'
import logo from '../../../public/assets/img/logo.png'

export default function Header() {
  return (
    <div className='bg-primary flex justify-between'>
      <div className='flex'>
       <Image 
       src={logo}
       alt='logo'
       width={32}
       height={32}
       />
       <h1>STUDOCS</h1>
       </div>
       <nav >
        <div className='flex justify-between gap-5 px-4'>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Team</a>
        <a href="#">Contact</a>
        <a href="#" className='rounded-md'>Get Started</a>
        </div>
       </nav>
    </div>
  )
}
