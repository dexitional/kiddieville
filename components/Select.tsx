import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
 
type Props = {
    type:string;
    label:string;
    placeholder: string;
    children: any;
}

function Select({ label,type,placeholder,children }: Props) {
  return (
    <div className="flex flex-col space-y-3">
        <label className="font-medium font-circular">{label}</label>
        <div className="hidden px-4 p-3 justify-between items-center rounded-md border border-gray-300 hover:outline-none hover:ring-black hover:border-black hover:ring-1 hover:drop-shadow-none bg-white cursor-pointer">
            <span>{placeholder}</span>
            <FaChevronDown className="text-gray-500" />
        </div>
        <div className="rounded overflow-hidden">
            <select className="px-4 p-3.5 w-full flex-1 rounded-md border border-gray-300 focus:border-2 focus:border-black font-circular">
              {children}
            </select>
        </div>
    </div>
  )
}

export default Select