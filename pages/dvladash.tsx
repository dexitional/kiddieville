import React from 'react'
import {MdOutlineSpaceDashboard} from 'react-icons/md'
import {FiUpload} from 'react-icons/fi'
import {BsCloudDownload} from 'react-icons/bs'
import DashNav from '../components/DashNav'
import Logout from '../components/Logout'
import Sidebar from '../components/Sidebar'
import MobileMenu from '../components/MobileMenu'
import TopMenu from '../components/TopMenu'
import DashLayout from '../components/DashLayout'

function Studash() {
  return (
     <DashLayout>
      <div className="py-12 md:w-[55%] lg:w-[70%] mx-5 md:mx-auto flex flex-col space-y-6 items-center ">
         {/* Profile & Welcome */}
         <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold ">Welcome, Lordina Livingstin</h1>
            <p className="text-medium font-circular">Your National Service application portal.</p>
         </div>
         <p className="px-6 py-3 w-full rounded-md font-medium font-circular text-center text-md text-zinc-500 bg-green-600/5">Congratulations! Your application has been approved.</p>

         {/* Cards */}
         <div className="w-full grid md:grid-cols-2 gap-4">
         

            <div className="px-4 py-6 h-[22rem] flex-1 flex flex-col justify-between rounded-lg bg-white">
               <div>
               <div className="mb-4 w-12 h-12 flex items-center justify-center bg-green-600/5 rounded-full">
                  <FiUpload className="w-5 h-5 text-green-700/70" />
               </div>
               <h3 className="font-bold font-arial">Application Form</h3>
               <p className="text-slate-500 font-medium">Start your application to get enrolled into the NSS Program at The Driver and Vehicle Liencsing Authority.</p>
               </div>
               <button className="p-4 py-3 w-full bg-green-700 text-white font-bold rounded-lg">Start Application</button>
            </div>

            <div className="px-4 py-6 h-[22rem] flex-1 flex flex-col justify-between rounded-lg bg-white">
               <div>
               <div className="mb-4 w-12 h-12 flex items-center justify-center bg-green-600/5 rounded-full">
                     <BsCloudDownload className="w-5 h-5 text-green-700/70" />
               </div>
               <h3 className="font-bold font-arial">Download Appointment Letter</h3>
               <p className="text-slate-500">Download your approved appointment letter to get started at DVLA.</p>
               </div>
               <button className="p-4 py-3 w-full bg-green-700 text-white font-bold rounded-lg">Download Letter</button>
            </div>

            <div className="px-4 py-6 h-[22rem] flex-1 flex flex-col justify-between rounded-lg bg-white">
               <div>
               <div className="mb-4 w-12 h-12 flex items-center justify-center bg-green-600/5 rounded-full">
                  <FiUpload className="w-5 h-5 text-green-700/70" />
               </div>
               <h3 className="font-bold font-arial">NSS district approved appointment form</h3>
               <p className="text-slate-500 font-medium">Upload your appointment form to complete your enrollment into the NSS Program at The Driver and Vehicle Liencsing Authority.</p>
               </div>
               <button className="p-4 py-3 w-full bg-green-700 text-white font-bold rounded-lg">Upload PDF</button>
            </div>

            <div className="px-4 py-6 h-[22rem] flex-1 flex flex-col justify-between rounded-lg bg-white">
               <div>
               <div className="mb-4 w-12 h-12 flex items-center justify-center bg-green-600/5 rounded-full">
                     <BsCloudDownload className="w-5 h-5 text-green-700/70" />
               </div>
               <h3 className="font-bold font-arial">Download Release Letter</h3>
               <p className="text-slate-500">Download your release letter to send to the NSS secretariat</p>
               </div>
               <button className="p-4 py-3 w-full bg-green-700 text-white font-bold rounded-lg">Download Letter</button>
            </div>


         </div>
      </div>
      </DashLayout>
  )
}

export default Studash