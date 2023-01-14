import React,{useState,useEffect,Fragment} from 'react'
import { Tab } from '@headlessui/react'
import { fetcher } from '../../utils/apiClient';
import { useUserStore } from '../../utils/store';
import useSWR from 'swr'
import Image from 'next/image'
import moment from 'moment';

function ParentProfile({ setPage,setRow,id }: any) {
   const { data,error } = useSWR(`/api/parent?profile=${id}`, fetcher)
   console.log(data,error)
   return (
       data ?
      <div className="p-5 border rounded-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
         <div className="p-4 bg-blue-50/20 border-2 border-yellow-900/20 rounded-lg w-full md:w-max-md shadow-lg shadow-yellow-800/20">
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
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.parent?.fname?.toUpperCase()}</div>
            </div>
            <div className="my-2 flex flex-col md:flex-row">
               <div className="w-36 text-sm font-circular">Middle Name:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.parent?.mname?.toUpperCase()}</div>
            </div>
            <div className="my-2 flex flex-col md:flex-row">
               <div className="w-full md:w-36 text-sm font-circular">Last Name:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.parent?.lname?.toUpperCase()}</div>
            </div>
            <div className="my-2 flex flex-col md:flex-row">
               <div className="w-full md:w-36 text-sm font-circular">Date of Birth:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{moment(data?.data?.parent?.dob).format('MMMM DD, YYYY').toUpperCase()}</div>
            </div>
            <div className="my-2 flex flex-col md:flex-row">
               <div className="w-full md:w-36 text-sm font-circular">Location:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.parent?.location?.toUpperCase()}</div>
            </div>
            <div className="my-2 flex flex-col md:flex-row">
               <div className="w-full md:w-36 text-sm font-circular">Phone:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.parent?.phone?.toUpperCase()}</div>
            </div>
            <div className="my-2 flex flex-col md:flex-row">
               <div className="w-full md:w-36 text-sm font-circular">Address:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.parent?.address?.toUpperCase()}</div>
            </div>
            <div className="my-2 flex flex-col md:flex-row">
               <div className="w-full md:w-36 text-sm font-circular">Email Address:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.parent?.email?.toUpperCase()}</div>
            </div>
            <div className="my-2 flex flex-col md:flex-row">
               <div className="w-full md:w-36 text-sm font-circular">Occupation:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.parent?.occupation?.toUpperCase()}</div>
            </div>
            
            <div className="my-2 flex flex-col md:flex-row">
               <div className="w-full md:w-36 text-sm font-circular">Number of Wards:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.parent?.no_ward }</div>
            </div>
             {/* Children & Wards */}
             <div className="my-3 flex">
               <h3 className="mr-2 text-xs font-semibold tracking-widest text-gray-400">WARDS & CHILDREN</h3>
               <span className="flex-1 border-b-2"></span>
            </div>
            {data?.data?.student?.map((r:any,i:number)=> (
            <div className="my-2 flex flex-col md:flex-row" key={i}>
               <div className="w-full md:w-36 text-sm font-circular">#{i+1} Ward Name:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{r.lname}, {r.fname} {r.mname}<br/><small className="text-gray-800"><em> -- {r.refno}&nbsp;&nbsp;  ( { r.class?.name } )</em></small></div>
            </div>
            ))}
           
            {/* Academic */}
            <div className="my-3 flex flex-col md:flex-row">
               <h3 className="mr-2 text-xs font-semibold tracking-widest text-gray-400">LOGIN CREDENTIALS</h3>
               <span className="flex-1 border-b-2"></span>
            </div>
            <div className="my-2 flex flex-col md:flex-row">
               <div className="w-full md:w-36 text-sm font-circular">Parent Reference ID:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.parent?.refno}</div>
            </div>
            <div className="my-2 flex flex-col md:flex-row">
               <div className="w-full md:w-36 text-sm font-circular">Parent Password:</div>
               <div className="flex-1 text-sm font-circular text-yellow-900/90">{data?.data?.parent?.password}</div>
            </div>
            
         </div>
      </div>
      : null
  )
}
export default ParentProfile
