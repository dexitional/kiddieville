import React from 'react'
import Logo from '../public/logo.jpg'
import Bg from '../public/uhas_bg2.jpg'
import {FaChevronRight} from 'react-icons/fa'
import Link from 'next/link'

function LoginSideBar() {
  return (
    <div className="relative w-[30%] h-full hidden md:flex flex-col justify-between bg-blue-900 font-circular">
        <img src={Bg.src} className="absolute z-2 w-full h-screen object-cover object-left opacity-20 blur-[5%] mix-blend-screen"/>
        <div className="p-8 z-10 flex flex-col items-center text-white space-y-6 font-circular">
          <img src={Logo.src} className=" w-48 h-48 object-contain filter mix-blend-screen rounded-xl opacity-70"/>
          <h1 className="text-2xl font-bold text-center"><span className="text-yellow-300/60 text-3xl"><span className="md:text-8xl text-yellow-500/60 italic">KIDDIE VILLE</span><br/> MONTESSORI</span><br/></h1>
          <p className="font-circular hidden">Apply for your Student Admission ( all modes. )</p>
        </div>
        <div className="px-10 py-0 z-10 w-full h-[5.25rem] flex flex-row items-center justify-between bg-yellow-700/60 text-white">
        <Link href="#">
            <span>Not enrolled yet ? <span className="font-circular">Click to enroll child Now !</span></span>
        </Link>
        <FaChevronRight className="w-4 h-4  "/>
        </div>
    </div>
  )
}

export default LoginSideBar