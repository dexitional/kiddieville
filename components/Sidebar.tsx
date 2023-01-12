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
        <div className="h-[32.2rem] space-y-2 overflow-scroll scrollbar-hide">
            <DashNav title="Dashboard" link="/studash" active/>
            {/*
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
            */}
            <DashNav title="Academic Calendar" />
            <DashNav title="Profile & Bio-data"  link="/profile" />
            <DashNav title="Parents & Guardians" />
            
            {/* Student's Management */}
            <DashNav title="Student Records" link="/student" />
            {/* <DashNav title="Student Attendance" /> */}
            {/* <DashNav title="Student Pickup" /> */}
            {/* <DashNav title="Student Evaluation" /> */}
            {/* <DashNav title="Student Bills & Invoices" /> */}
            {/* <DashNav title="Student Fees Payment" /> */}
            {/* <DashNav title="Student Feeding & Canteen" /> */}
            {/* <DashNav title="Student Transport" /> */}
            <DashNav title="Student Classes" />
            {/* <DashNav title="Our Subjects" /> */}
            {/* <DashNav title="Our Tutors" /> */}
             {/* Staff Management */}
            {/* <DashNav title="Staff Records" /> */}
            {/* <DashNav title="Staff Attendance" /> */}
            {/* <DashNav title="Staff Tasks" /> */}
            {/* <DashNav title="Lesson Plan" /> */}
            {/* <DashNav title="Lesson Presentation" /> */}
           
            {/* Account Management */}
            {/* <DashNav title="Expenses " /> */}
            {/* Parent's Management */}
            {/* <DashNav title="Child Profile" /> */}
            {/* <DashNav title="Child Attendance" /> */}
            {/* <DashNav title="Child Pickups" /> */}
            {/* <DashNav title="Child Payments ( fees/feeding/Transport balance)" /> */}
            {/* <DashNav title="Child Evaluation" /> */}
            {/* Systems menus */}
            <DashNav title="User accounts" />
            {/* <DashNav title="School Expenses " /> */}
            {/* <DashNav title="System Reports" /> */}
        </div>
        <div className="absolute bottom-8 w-[90%] mx-1 border-t border-white/10">
            <Logout title="Sign out" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar