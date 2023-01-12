import React,{useState,useEffect,Fragment} from 'react'
import { Tab } from '@headlessui/react'
import { fetcher } from '../../utils/apiClient';
import { useUserStore } from '../../utils/store';
import useSWR from 'swr'
import Image from 'next/image'
import TransactionSnip from '../snippet/TransactionSnip';
import AttendanceSnip from '../snippet/AttendanceSnip';
import BillSnip from '../snippet/BillSnip';
import moment from 'moment';

function StudentProfile({ setPage,setRow,id }: any) {
   const [ vpage,setVpage ] = useState(1)
   const [ keyword,setKeyword ] = useState("")
   //const { admin } = useUserStore((state) => state);
   //useUserStore.setState({ eid: id,ename: name })
   const { data,error } = useSWR(`/api/student?studinfo=${id}`, fetcher)
   //const { student } = data?.data;
   console.log(`/api/student?studinfo=${id}`,data,error)
    
   
    const viewRecord = (id:string) => {}
    const deleteRecord = (id:string) => {}
  
  return (
       data ?
      <div className="p-5 border rounded-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
         <div className="p-4 bg-blue-50/20 border-2 border-yellow-900/20 rounded-lg w-full md:w-96 shadow-lg shadow-yellow-800/20">
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
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.student?.fname?.toUpperCase()}</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Middle Name:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.student?.mname?.toUpperCase()}</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Last Name:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.student?.lname?.toUpperCase()}</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Date of Birth:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{moment(data?.data?.student?.dob).format('MMMM DD, YYYY').toUpperCase()}</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Location:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.student?.location?.toUpperCase()}</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Phone:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.student?.phone?.toUpperCase()}</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Address:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.student?.address?.toUpperCase()}</div>
            </div>
            {/* Academic */}
            <div className="my-3 flex">
               <h3 className="mr-2 text-xs font-semibold tracking-widest text-gray-400">ACADEMIC</h3>
               <span className="flex-1 border-b-2"></span>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Student ID:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.student?.refno?.toUpperCase()}</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Class Group:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.student?.class?.name?.toUpperCase()}</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Date of Admission:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{moment(data?.data?.student?.doa).format('MMMM DD, YYYY').toUpperCase()}</div>
            </div>
             {/* Academic */}
             <div className="my-3 flex">
               <h3 className="mr-2 text-xs font-semibold tracking-widest text-gray-400">SERVICES</h3>
               <span className="flex-1 border-b-2"></span>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">School Bus:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.student?.bus_member ? 'REGISTERED':'NO '}</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">School Feeding:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.student?.feed_member ? 'REGISTERED':'NO '}</div>
            </div>

            {/* Guardian */}
            <div className="my-3 flex">
               <h3 className="mr-2 text-xs font-semibold tracking-widest text-gray-400">GUARDIAN</h3>
               <span className="flex-1 border-b-2"></span>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Parent First Name:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.student?.parent?.fname?.toUpperCase()}</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Parent Middle Name:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.student?.parent?.mname?.toUpperCase()}</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Parent Last Name:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.student?.parent?.lname?.toUpperCase()}</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Occupation:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.student?.parent?.occupation?.toUpperCase()}</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Location:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.student?.parent?.location?.toUpperCase()}</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Phone:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.student?.parent?.phone?.toUpperCase()}</div>
            </div>
            {/* Academic */}
            <div className="my-3 flex">
               <h3 className="mr-2 text-xs font-semibold tracking-widest text-gray-400">LOGIN CREDENTIALS</h3>
               <span className="flex-1 border-b-2"></span>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Parent Reference:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.student?.parent?.refno}</div>
            </div>
            <div className="my-2 flex">
               <div className="w-36 text-sm font-circular">Parent Password:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.student?.parent?.password}</div>
            </div>
            
         </div>

         <div className="p-4 bg-blue-50/20 border-2 border-yellow-900/20 rounded-lg flex-1">
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
      : null
  )
}
export default StudentProfile
