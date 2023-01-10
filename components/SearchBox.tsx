import React from 'react'
import { MdSearch, } from 'react-icons/md'
export default function SearchBox({onChange,onSubmit, value = ""}:any) {
  return (
    <div className="w-full relative md:mr-2 my-2 px-2 py-[0.1rem] flex items-center space-x-2 bg-white border border-gray-300/70 focus:border-gray-600/70 rounded-md overflow-hidden">
        <MdSearch className="h-6 w-6 text-slate-600" />
        <input placeholder="Search" type="search" name="search" onChange={onChange} value={value} className="flex-1 focus:ring-0 border-none outline-none font-light placeholder:text-md placeholder:font-light placeholder-slate-600"/>
        <button onClick={onSubmit} className="absolute right-2 sm:relative p-1 sm:px-2 rounded-md bg-slate-50/50 border border-gray-300 text-xs text-gray-500 font-bold">SEARCH</button>
    </div>
  )
}
