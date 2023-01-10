import React,{useState,useEffect,Fragment} from 'react'
import { Tab } from '@headlessui/react'
import { fetcher } from '../../utils/apiClient';
import { useUserStore } from '../../utils/store';
import useSWR from 'swr'
import Image from 'next/image'
import TransactionSnip from '../snippet/TransactionSnip';
import AttendanceSnip from '../snippet/AttendanceSnip';
import Test from '../snippet/Test';
import BillSnip from '../snippet/BillSnip';

function StudentProfile({ setPage,setRow }: any) {
   const [ vpage,setVpage ] = useState(1)
   const [ keyword,setKeyword ] = useState("")
   //const { admin } = useUserStore((state) => state);
   //useUserStore.setState({ eid: id,ename: name })
   const { data } = useSWR( keyword ? `/api/student?page=${vpage-1}&keyword=${keyword}`: `/api/student?page=${vpage-1}`, fetcher)
   const onChange = (e:any) => {
      e.preventDefault();
      setKeyword(e.target.value)
    }
  
    const onSubmit = (e:any) => {
      e.preventDefault();
      setKeyword(e.target.value)
    }

    const editRecord = (id:string) => {
       setPage('edit')
       const dt = data && data.data && data.data.data?.find((m:any) => m.id === id)
       setRow({ ...dt })
    }

    const viewRecord = (id:string) => {}
    const deleteRecord = (id:string) => {}
  
  return (
      <div className="p-5 border rounded-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
         <div className="p-4 bg-blue-50/30 border-2 border-yellow-900/20 rounded-lg w-full md:w-96 shadow-lg shadow-yellow-800/20">
            {/* Photo */}
            <div className="mb-6 p-6 relative overflow-hidden w-full flex items-center justify-center border-2 border-blue-100/40 rounded-lg bg-blue-50/60">
               <Image 
                  src={`https://ehub.ucc.edu.gh/api/photos/?tag=15666`}
                  alt="Profile Picture"
                  width={200}
                  height={50}
                  style={{
                     objectFit: "cover",
                     borderRadius: 15,
                  }} 
               />
            </div>
            {/* Personal */}
            <div className="my-3 flex">
               <h3 className="mr-2 text-xs font-semibold tracking-widest text-gray-400">PERSONAL</h3>
               <span className="flex-1 border-b-2"></span>
            </div>
            <div className="my-2 flex flex-col md:flex-row">
               <div className="w-full md:w-36 text-sm font-circular">First Name:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">EBENEZER</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Middle Name:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">KWABENA BLAY</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Last Name:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">ACKAH</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Date of Birth:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">FEBRUARY 28, 1989</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Location:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">KUMASI</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Phone:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">0277675089</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Address:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">MIS, UCC - GHANA</div>
            </div>
            {/* Academic */}
            <div className="my-3 flex">
               <h3 className="mr-2 text-xs font-semibold tracking-widest text-gray-400">ACADEMIC</h3>
               <span className="flex-1 border-b-2"></span>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Student ID:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">2001</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Class Group:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">KWABENA BLAY</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Date of Admission:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">JANUARY 28, 2023</div>
            </div>
             {/* Academic */}
             <div className="my-3 flex">
               <h3 className="mr-2 text-xs font-semibold tracking-widest text-gray-400">SERVICES</h3>
               <span className="flex-1 border-b-2"></span>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">School Bus:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">ACTIVATED</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">School Feeding:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">ACTIVATED</div>
            </div>

            {/* Guardian */}
            <div className="my-3 flex">
               <h3 className="mr-2 text-xs font-semibold tracking-widest text-gray-400">GUARDIAN</h3>
               <span className="flex-1 border-b-2"></span>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Parent First Name:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">EBENEZER</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Parent Middle Name:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">KWABENA BLAY</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Parent Last Name:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">ACKAH</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Occupation:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">FEBRUARY 28, 1989</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Location:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">KUMASI</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Phone:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">0277675089</div>
            </div>
            {/* Academic */}
            <div className="my-3 flex">
               <h3 className="mr-2 text-xs font-semibold tracking-widest text-gray-400">LOGIN CREDENTIALS</h3>
               <span className="flex-1 border-b-2"></span>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Parent Reference:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">41329275</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Parent Password:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">nbsp21e</div>
            </div>
            
         </div>

         <div className="p-4 border rounded-lg flex-1">
             <Tab.Group>
               <Tab.List className="w-full h-10 text-sm text-yellow-900/90 tracking-widest font-circular bg-white rounded-lg flex justify-between space-x-1 overflow-hidden">
                  <Tab as={Fragment}>
                    {({ selected }) => (<div className={selected ? 'flex-1 flex items-center justify-center bg-yellow-900/10':'flex-1 flex items-center justify-center bg-blue-50/80 cursor-pointer'}>TRANSACTIONS</div>)}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (<div className={selected ? 'flex-1 flex items-center justify-center bg-yellow-900/10':'flex-1 flex items-center justify-center bg-blue-50/80 cursor-pointer'}>ATTENDANCES</div>)}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (<div className={selected ? 'flex-1 flex items-center justify-center bg-yellow-900/10':'flex-1 flex items-center justify-center bg-blue-50/80 cursor-pointer'}>BILLS & INVOICES</div>)}
                  </Tab>
               </Tab.List>
               <Tab.Panels className="my-6">
                  <Tab.Panel>
                     <TransactionSnip />
                  </Tab.Panel>
                  <Tab.Panel>
                     <AttendanceSnip />
                  </Tab.Panel>
                  <Tab.Panel>
                    <BillSnip />
                  </Tab.Panel>
               </Tab.Panels>
            </Tab.Group>
            {/* Transactions */}
            {/* Attendance */}
            {/*  */}

            {/*  */}
         </div>
      </div>
  )
}
export default StudentProfile
