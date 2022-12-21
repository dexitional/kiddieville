import React from 'react'
import Logo from '../public/logo.png'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import DashNav from '../components/DashNav'
import Logout from '../components/Logout'

function Sidebar() {
  return (
    <div className="relative p-2 w-1/4 hidden md:flex bg-green-700">
      <div className="overflow-y fixed w-[19%] h-screen flex flex-col space-y-6 ">
        <div className="relative flex items-center justify-center bg-green-800/50 rounded-md">
            <img src={Logo.src} className="mx-2 mt-2 h-[100px]" />
            <div className="px-4 py-0 absolute right-0 -rotate-90 rounded text-xl font-bold text-yellow-400/70 bg-white/20">UHAS</div>
        </div>
        <div className="space-y-2">
            <DashNav title="Dashboard" active />
            <DashNav title="Halls" />
            <DashNav title="Rooms" />
            <DashNav title="Occupants" />
            <DashNav title="Reservations" />
            <DashNav title="Requests" />
            <DashNav title="Accomodation Sessions" />
            <DashNav title="User accounts" />
            <DashNav title="System Reports" />
        </div>
        <div className="absolute bottom-8 w-[90%] mx-1 border-t border-white/10">
            <Logout title="Sign out" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar