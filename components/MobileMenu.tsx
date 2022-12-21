import Link from 'next/link'
import React,{useState,Fragment} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Menu, Transition } from '@headlessui/react'
import Logo from '../public/logo.png'

function MobileMenu() {
  const [show,setShow] = useState(false)
  return (
    <Menu as="div" className="sticky top-0 z-20">
    
      <div className="py-3 px-6 md:hidden flex justify-between items-center bg-green-700 border-b border-gray-200">
        <img src={Logo.src} className="px-2 py-1.5 h-12 rounded-md bg-slate-800/20" />
        <span className="px-2 py-1 rounded font-medium font-circular tracking-widest text-yellow-300 shadow-lg shadow-yellow-100/10">UHMS</span>
        <Menu.Button>
          <GiHamburgerMenu className="p-2 h-10 w-10 text-white" aria-hidden="true"/>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items as="div" className="absolute py-3 pb-6 w-full md:hidden flex flex-col text-white font-circular bg-green-700">
           <Menu.Item><Link href="#"><div className="px-6 py-4 w-full">Dashboard</div></Link></Menu.Item>
           <Menu.Item><Link href="#"><div className="px-6 py-4 w-full">Onboarding</div></Link></Menu.Item>
           <Menu.Item><span className="px-6 py-4 w-full">Logout</span></Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )}

export default MobileMenu