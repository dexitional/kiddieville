import React from 'react'
import Logo from '../public/logo.jpg'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import DashNav from '../components/DashNav'
import Logout from '../components/Logout'

function Sidebar() {
  return (
    <div className="relative p-2 w-1/4 hidden md:flex bg-[#000131]">
      <div className="overflow-y fixed w-[19%] h-screen flex flex-col space-y-6 ">
        <div className="relative flex items-center justify-center bg-yellow-800/80 rounded-md">
            <div className="px-2 py-0 absolute left-0 -rotate-45 rounded text-xl font-bold text-yellow-900/80 bg-white/20 tracking-[0.25rem]">KIDDIE</div>
            <img src={Logo.src} className="mx-2 my-2 h-[100px] rounded-lg" />
            <div className="px-4 py-0 absolute right-0 -rotate-45 rounded text-xl font-bold text-yellow-900/80 bg-white/20 tracking-[0.25rem]">VILLE</div>
        </div>
        <div className="space-y-2">
            <DashNav title="Dashboard" active />
            <DashNav title="Students" />
            <DashNav title="Attendance" />
            <DashNav title="Commutement" />
            <DashNav title="Classes" />
            <DashNav title="Subjects" />
            <DashNav title="Fees" />
            <DashNav title="Feeding" />
            <DashNav title="Transport" />
            <DashNav title="Payments" />
            <DashNav title="Evaluations" />
            <DashNav title="Expenses" />
            <DashNav title="Expenses" />
            <DashNav title="User accounts" />
            <DashNav title="System Reports" />
            {/* Student's Management */}
            {/* Staff Management */}
            {/* Student's Management */}
            {/* Student's Management */}
        </div>
        <div className="absolute bottom-8 w-[90%] mx-1 border-t border-white/10">
            <Logout title="Sign out" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar