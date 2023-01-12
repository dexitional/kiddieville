import React,{useState} from 'react'
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
import Modal from '../components/Modal'
import StudentProfile from '../components/list/StudentProfile'

function Studash() {
  const [openModal, setOpenModal ] = useState(false)
  const [modalData, setModalData ] = useState({})
  const [eid, setEid ] = useState(null)
  
  const me = (id:any) => {
     
     setOpenModal(true)
  }

  return (
     <DashLayout>
      { 
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          <StudentProfile studentId={eid} />
        </Modal>
      }
      <div className="py-12 md:w-[55%] lg:w-[70%] mx-5 md:mx-auto flex flex-col space-y-6 items-center ">
         {/* Profile & Welcome */}
         <div className="flex flex-col items-center">
            <h1 className="text-xl sm:text-3xl font-bold ">Welcome, Lordina Livingstin</h1>
            <p className="text-xs sm:text-sm text-medium font-circular">KIDDIE VILLE STUDENT MANAGEMENT SYSTEM</p>
         </div>
         <p className="px-6 py-3 w-full rounded-md font-medium font-circular text-center text-sm sm:text-md text-zinc-500 bg-green-600/5">You are logged-in as a <span className="text-bold tracking-wide text-yellow-600">Parent | Tutor | Administrator | Accountant </span></p>
           <button onClick={()=> me(1)}>CLick</button>
         
         {/* Cards */}
         <div className="w-full grid md:grid-cols-3 gap-4">
            <MenuCard title="Student Record" desc="Manage list of students in the management system." Icon={HiHomeModern} link_text="View records" link="/student" />
            {/* <MenuCard title="Student Attendance" desc="Manage school attendace and student reporting." Icon={HiHomeModern} link_text="View records" link="/student" /> */}
            {/* <MenuCard title="Student Pickups" desc="Manage assigned pickup persons of students." Icon={MdMeetingRoom} link_text="View records" link="/login" /> */}
            {/* <MenuCard title="Student Evaluation" desc="Manage student performances & assessments." Icon={MdMeetingRoom} link_text="View records" link="/login" /> */}
            {/* <MenuCard title="Student Bills & Invoices" desc="Manage student bills, invoices & charges." Icon={MdMeetingRoom} link_text="View records" link="/login" /> */}
            {/* <MenuCard title="Student Fees Payment" desc="Manage student fees payments and other revenues." Icon={MdMeetingRoom} link_text="View records" link="/login" /> */}
            {/* <MenuCard title="Student Feeding & Canteen" desc="Manage student feeding, canteen fees & payments." Icon={MdMeetingRoom} link_text="View records" link="/login" /> */}
            {/* <MenuCard title="Student Transport" desc="Manage student transportation payments & reports." Icon={MdMeetingRoom} link_text="View records" link="/login" /> */}
            <MenuCard title="Our Classes" desc="Manage student classes and assigned class tutors." Icon={MdMeetingRoom} link_text="View records" link="/class" />
            {/* <MenuCard title="Our Subjects" desc="Manage student subjects with curriculum." Icon={MdMeetingRoom} link_text="View records" link="/login" /> */}
            {/* <MenuCard title="Our Tutors" desc="Manage student bills, invoices & charges." Icon={MdMeetingRoom} link_text="View records" link="/login" /> */}
            {/* <MenuCard title="Student Bills & Invoices" desc="Manage student bills, invoices & charges." Icon={MdMeetingRoom} link_text="View records" link="/login" /> */}
            {/* <MenuCard title="Student Bills & Invoices" desc="Manage student bills, invoices & charges." Icon={MdMeetingRoom} link_text="View records" link="/login" /> */}
            <MenuCard title="User Profile" desc="Manage and view profile of active user." Icon={HiHomeModern} link_text="View records" link="/profile" />
            {/* <MenuCard title="User accounts" desc="Start your application to get enrolled into the NSS Program at The Driver and Vehicle Liencsing Authority." Icon={MdOutlineSupervisorAccount} link_text="View Accounts" link="/login" /> */}
            {/* <MenuCard title="System Reports" desc="Start your application to get enrolled into the NSS Program at The Driver and Vehicle Liencsing Authority." Icon={TbReport} link_text="View Reports" link="/login" /> */}
         </div>
      </div>
      </DashLayout>
  )
}

export default Studash