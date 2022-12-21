import React from 'react'


type Props = {
    type:"submit" | "reset" | undefined ;
    label:string;
    position: string;
}

function Button({ label,type,position }: Props) {
  return (
    <div className={`flex ${position == 'left'? 'justify-start': position == 'right'? 'justify-end': 'justify-center'}`}>
      <button className={`px-6 py-2 w-auto bg-green-700 font-bold text-white rounded-lg`} type={type}>
        {label}
      </button>
    </div>
  )
}

export default Button