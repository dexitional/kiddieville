import React,{useState,useEffect} from 'react'
import {FiUpload} from 'react-icons/fi'
import {TfiMenuAlt} from 'react-icons/tfi'
import { Menu } from '@headlessui/react'
import PagerList from '../PagerList'
import { fetcher } from '../../utils/apiClient';
import { useUserStore } from '../../utils/store';
import useSWR from 'swr'
import moment from 'moment'
import { FaUserEdit } from 'react-icons/fa'
import { AiOutlineFolderView } from 'react-icons/ai'
import Image from 'next/image'
import StudentProfile from './StudentProfile'

function Profile({ setPage,setRow }: any) {
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
    <div className="py-4 px-4 w-full md:w-full m-5 md:mx-10 flex flex-col space-y-6 items-center bg-white border rounded-lg drop-shadow-sm shadow-gray-100">
        <div className="z-10 w-full sticky top-20  md:relative md:top-0 flex flex-col md:flex-row items-center justify-between bg-white md:bg-blue-50/10 border border-gray-300/70 focus:border-gray-600/70 rounded-md overflow-hidden">
           <span className="my-2 md:my-0 py-4 px-6 sm:text-lg tracking-widest font-bold text-[#000131] font-arial">PROFILE & BIO-DATA</span>
        </div>
        <div className="w-full">
            <StudentProfile />
        </div>
    </div>
  )
}
export default Profile
