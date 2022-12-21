import React from 'react'
import {FiUpload} from 'react-icons/fi'
import {TfiMenuAlt} from 'react-icons/tfi'
import DashLayout from '../components/DashLayout'
import { Menu } from '@headlessui/react'

function Hall() {
  return (
     <DashLayout>
      <div className="py-12 px-10 w-full md:w-full m-5 md:mx-10 flex flex-col space-y-6 items-center bg-white border rounded-lg drop-shadow-sm shadow-gray-100">
          <div className="w-full">
            <table className="w-full border-collapse grid border-spacing-4">
                  <tr className={`hidden md:grid md:grid-cols-7 bg-[#f8f9fa] font-medium text-gray-600/90 text-sm tracking-wide rounded-lg mb-4 px-2 py-1`}>
                     <td className="p-1 px-2">ID</td>
                     <td className="p-1 px-2">Name of Hall</td>
                     <td className="p-1 px-2">Location</td>
                     <td className="p-1 px-2">Phone</td>
                     <td className="p-1 px-2">Email</td>
                     <td className="p-1 px-2  md:text-center">Capacity</td>
                     <td className="p-1 px-2  md:text-center">Rooms available</td>
                  </tr>

                  <tr className={`grid md:grid-cols-7 text-gray-900 text-[0.81rem] font-normal font-circular rounded-md px-2 py-1 divide-y-3`}>
                     <>
                     <td className="md:p-1 md:px-2">
                        <span className="px-4 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-500/70">ID</span>
                        <div className="px-4 py-1">1</div>
                     </td>
                     <td className="md:p-1 md:px-2">
                        <span className="px-4 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-500/70">Name of Hall</span>
                        <div className="px-4 py-1">Adehye & Casford Hall</div>
                     </td>
                     <td className="md:p-1 md:px-2">
                        <span className="px-4 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-500/70">Phone</span>
                        <div className="px-4 py-1">Opposite Newtown</div>
                     </td>
                     <td className="md:p-1 md:px-2">
                        <span className="px-4 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-500/70">Location</span>
                        <div className="px-4 py-1">(+233) 27 767 5089</div>
                     </td>
                     <td className="md:p-1 md:px-2 flex flex-wrap whitespace-normal">
                        <span className="px-4 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-500/70">Email</span>
                        <div className="px-4 py-1">info@adehyehall.ucc.edu.gh</div>
                     </td>
                     <td className="md:p-1 md:px-2 md:text-center">
                        <span className="px-4 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-500/70">Capacity</span>
                        <div className="px-4 py-1">512</div>
                     </td>
                     <td className="md:p-1 md:px-2 md:text-center border-b-2 md:border-none border-dashed border-green-600">
                        <span className="mb-2 md:0 px-4 py-1 w-full flex md:hidden rounded-md bg-[#f8f9fa] text-gray-600/80">Rooms available</span>
                        <Menu as="div" className="mb-4 md:0 relative">
                           <Menu.Button className="relative px-2 py-1 border-2 rounded">
                              <TfiMenuAlt  className="z-20 h-4 w-4 text-gray-600/70"/>
                              <Menu.Items as="div" className="z-10 absolute top-6 -left-0.5 md:-right-0.5 w-48 py-2 flex flex-col bg-white drop-shadow-sm border-2 rounded-bl rounded-br rounded-tl text-md text-gray-500 divide-y-2">
                                 <Menu.Item as="button" className="py-2 px-2 pl-6 flex space-x-4 items-center">
                                    <FiUpload />
                                    <span>Edit Hall</span>
                                 </Menu.Item>
                                 <Menu.Item as="button" className="py-2 px-2 pl-6 flex space-x-4 items-center">
                                    <FiUpload />
                                    <span>Edit Hall</span>
                                 </Menu.Item>
                                 <Menu.Item as="button" className="py-2 px-2 pl-6 flex space-x-4 items-center">
                                    <FiUpload />
                                    <span>Edit Hall</span>
                                 </Menu.Item>
                              </Menu.Items>
                           </Menu.Button>
                        </Menu>
                     </td>
                     </>
                  </tr>
            </table>



          </div>
      </div>
      </DashLayout>
  )
}

export default Hall