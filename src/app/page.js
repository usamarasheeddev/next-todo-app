import Link from 'next/link'
import React from 'react'
import Navbar from '../../Components/Navbar'

export default function page() {
  return (
    <div>
    <Navbar/>
    <Link href='/pages/home'>Home</Link>      
    <Link href='/pages/about'>About</Link>      
    </div>
  )
}
