import React from 'react'
import Logo from '../public/logo.jpg'
import Button from './Button'
import Input from './Input'
import PhoneInput from './PhoneInput'
import Select from './Select'

function LoginContent() {
  return (
    <div className="px-10 md:px-20 py-5 md:py-16 h-full min-h-screen flex-1 flex flex-col space-y-10 bg-[#fbf9f9]">
      <div className="space-y-3">
        <img src={Logo.src} className="w-20 h-20 rounded-lg flex md:hidden object-contain"/>
        <h1 className="hidden sm:flex text-2xl font-bold">Login</h1>
        <h1 className="sm:hidden text-2xl font-bold text-blue-900">KIDDIE VILLE MONTESSORI</h1>
        <p className="text-gray-500/90 font-medium font-circular">Provide your account information to continue</p>
      </div>
      <div>
        <form className="space-y-3">
           <Input label="Enter Username" type="text" placeholder='Enter Username' />
           <Input label="Enter Password" type="password" placeholder='Enter Password' />
           <Button label="Continue" type="submit" position="right"/>
        </form>
      </div>
    </div>
  )
}

export default LoginContent