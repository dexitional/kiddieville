import React from 'react'
import {MdMeetingRoom,MdOutlineSpaceDashboard,MdAutoAwesomeMotion,MdOutlineSupervisorAccount} from 'react-icons/md'
import {FiUpload} from 'react-icons/fi'
import {HiHomeModern} from 'react-icons/hi2'
import {GiBunkBeds} from 'react-icons/gi'
import {RiHotelBedFill} from 'react-icons/ri'
import {FaRestroom} from 'react-icons/fa'
import {TbReport} from 'react-icons/tb'
import {BsStickies} from 'react-icons/bs'
import DashNav from '../components/DashNav'
import Logout from '../components/Logout'
import Sidebar from '../components/Sidebar'
import MobileMenu from '../components/MobileMenu'
import TopMenu from '../components/TopMenu'
import DashLayout from '../components/DashLayout'
import MenuCard from '../components/MenuCard'

function Studash() {
  return (
     <DashLayout>
      <div className="py-12 md:w-[55%] lg:w-[70%] mx-5 md:mx-auto flex flex-col space-y-6 items-center ">
         {/* Profile & Welcome */}
         <div className="flex flex-col items-center">
            <h1 className="text-xl sm:text-3xl font-bold ">Welcome, Lordina Livingstin</h1>
            <p className="text-xs sm:text-sm text-medium font-circular">KIDDIE VILLE STUDENT MANAGEMENT SYSTEM</p>
         </div>
         <p className="px-6 py-3 w-full rounded-md font-medium font-circular text-center text-sm sm:text-md text-zinc-500 bg-green-600/5">You are logged-in as a <span className="text-bold tracking-wide text-yellow-600">Parent | Tutor | Administrator | Accountant </span></p>

         {/* Cards */}
         <div className="w-full grid md:grid-cols-2 gap-4">
            <MenuCard title="Halls" desc="Manage list of halls in the management system. De-activate, activate and view all halls" Icon={HiHomeModern} link_text="View Halls" link="/login" />
            <MenuCard title="Rooms" desc="Manage list of rooms in the management system. Assign room to a hall, view room list for a hall" Icon={MdMeetingRoom} link_text="View Rooms" link="/login" />
            <MenuCard title="Hall Occupants" desc="Manage list of hall occupants in the management system. De-activate, activate and view all halls" Icon={FaRestroom} link_text="View Occupants" link="/login" />
            <MenuCard title="Room Reservations" desc="Start your application to get enrolled into the NSS Program at The Driver and Vehicle Liencsing Authority." Icon={GiBunkBeds} link_text="View Reservations" link="/login" />
            <MenuCard title="Accomodation Requests" desc="Start your application to get enrolled into the NSS Program at The Driver and Vehicle Liencsing Authority." Icon={BsStickies} link_text="View Requests" link="/login" />
            <MenuCard title="Accomodation Sessions" desc="Start your application to get enrolled into the NSS Program at The Driver and Vehicle Liencsing Authority." Icon={MdAutoAwesomeMotion} link_text="View Sessions" link="/login" />
            <MenuCard title="User accounts" desc="Start your application to get enrolled into the NSS Program at The Driver and Vehicle Liencsing Authority." Icon={MdOutlineSupervisorAccount} link_text="View Accounts" link="/login" />
            <MenuCard title="System Reports" desc="Start your application to get enrolled into the NSS Program at The Driver and Vehicle Liencsing Authority." Icon={TbReport} link_text="View Reports" link="/login" />
         </div>
      </div>
      </DashLayout>
  )
}

export default Studash