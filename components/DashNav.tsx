import React from 'react'
import { MdOutlineSpaceDashboard } from 'react-icons/md'

type Props = {
   title: string;
   active: boolean | undefined | any
}

function DashNav({ title, active = undefined }: any) {
  return (
    <div className={`p-2 w-full h-12 flex items-center space-x-3 ${active ? 'bg-white/10 border-r-[6px] ':''} tansition-all duration-150 hover:bg-white/10 border-white rounded cursor-pointer`}>
        <MdOutlineSpaceDashboard className={`w-6 h-6 text-white`} />
        <span className={`text-[0.9rem] font-bold ${active ? 'text-white':'text-white/70'}`}>{title}</span>
    </div>
  )
}

export default DashNav