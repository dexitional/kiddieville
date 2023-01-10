import React,{ useEffect,useState } from 'react'
import BillSnip from './BillSnip'

function Test() {
  
  const [ martin, setMartin ] = useState({id:0, name: "Kwane"})
    
  return (
    <div className="w-[90%] mx-auto">
        <p onClick={() => setMartin("blue")} className="w-96 bg-red-900 text-red-700" id="">{martin}</p>
    </div>
  )
}

export default Test