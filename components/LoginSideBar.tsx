import React from 'react'
import Logo from '../public/logo.png'
import Bg from '../public/uhas_bg2.jpg'
import {FaChevronRight} from 'react-icons/fa'
import Link from 'next/link'

function LoginSideBar() {
  return (
    <div className="relative w-[30%] h-full hidden md:flex flex-col justify-between bg-green-900 font-circular">
        <img src={Bg.src} className="absolute z-2 w-full h-screen object-cover object-left opacity-30 blur-[5%] mix-blend-screen"/>
        <div className="p-8 z-10 flex flex-col text-white space-y-6 font-circular">
          <img src={Logo.src} className="w-36 h-36 object-contain filter mix-blend-screen"/>
          <h1 className="text-3xl font-bold">Welcome to <span className="text-yellow-400">UHAS</span><br/>Hall Mangement System</h1>
          <p className="font-circular">Apply for your Student Accomodation ( all modes. )</p>
        </div>
        <div className="px-10 py-0 z-10 w-full h-[5.25rem] flex flex-row items-center justify-between bg-green-600 text-white">
        <Link href="#">
            <span>Not a Student ? <span className="font-circular">Book an accomodation Now !</span></span>
        </Link>
        <FaChevronRight className="w-4 h-4  "/>
        </div>
    </div>
  )
}

export default LoginSideBar