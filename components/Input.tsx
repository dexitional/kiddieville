import Link from 'next/link';
import React,{useState} from 'react'
 
type Props = {
    type:string;
    label:string;
    placeholder: string;
 }

function Input({ label,type,placeholder }: Props) {
  const [show,setShow] = useState(false)
  const showPwd = (e:any) => {
    e.preventDefault();
    setShow(!show);
  }
  return (
    <div className="flex flex-col space-y-1.5">
        <div className="flex justify-between">
          <label className="font-medium font-circular">{label}</label>
          { false && type == 'password' && <Link href=""><span className="font-bold text-[0.95rem] text-green-700">Forgot Password?</span></Link> }
        </div>
        <div className="relative flex">
          <input autoComplete="false" type={type == 'password' && show ? 'text':type} placeholder={placeholder} className="px-4 p-3.5 flex-1 rounded-md border border-gray-300 text-green-600 placeholder:text-gray-400 focus:caret-green-600 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-600"/>
          { type == 'password' && <button onClick={showPwd} className="w-20 absolute top-1/4 right-1 z-20 font-bold text-sm text-green-700">{ show ? 'HIDE':'SHOW' }</button> }
        </div>
    </div>
  )
}

export default Input