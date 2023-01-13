import React,{ useEffect,useState,useRef } from 'react'
import PagerForm from '../PagerForm'
import Input from '../Input'
import Button from '../Button'
import Select from '../Select'
import useSWR from 'swr'
import { postParent } from '../../utils/apiClient'
import Notiflix from 'notiflix'
import moment from 'moment'


function ParentForm({ setPage,row }: any) {
  const [ form, setForm ] = useState({});
  const formRef = useRef<any>(null)
  const onChange = (e:any) => {
     setForm({...form,[e.target.name]:e.target.value})
  }

  const onSubmit = async (e:any) => {
    e.preventDefault()
    try{
      if(row.id <= 0 && form && Object.keys(form).length == 0) throw new Error("NO DATA PROVIDED!")
      const res = await postParent({ ...form,id:row.id });
      if (res.success) {
        // Do something if passed
        Notiflix.Notify.success('RECORD SAVED!');
        setTimeout(() => setPage('list'),200)       
      } else {
        // Show error messages
        Notiflix.Notify.failure('SAVING FAILED!');
      }
    } catch(e){
      console.log(e)
      // Show error messages
      Notiflix.Notify.failure('SOMETHING IS WRONG!');
    }
  };

  const onCancel = () => {
    setPage('list')
    setForm({})
    formRef.current.reset();
  }

  return (
    <div className="py-4 px-4 w-full md:w-full m-5 md:mx-10 flex flex-col space-y-6 items-center bg-white border rounded-lg drop-shadow-sm shadow-gray-100">
        <div className="w-full flex flex-col md:flex-row items-center justify-between bg-blue-50/10 border border-gray-300/70 focus:border-gray-600/70 rounded-md overflow-hidden">
           <span className="my-2 md:my-0 px-6 sm:text-lg tracking-widest font-bold text-[#000131] font-arial">PARENTS & GUARDIANS</span>
           <PagerForm setPage={setPage} onSubmit={onSubmit} onCancel={onCancel} />
        </div>
        <div className="w-full">
            <form onSubmit={onSubmit} ref={formRef}>
               <div className="p-4 border rounded bg-yellow-50/20 w-full flex flex-col md:flex-row md:space-x-6">
                  <div className="space-y-3 flex-1">
                     <Input defaultValue={row?.fname} name="fname" onChange={onChange} label="First Name" type="text" placeholder='First Name' />
                     <Input defaultValue={row?.mname} name="mname" onChange={onChange} label="Middle Name" type="text" placeholder='Middle Name'/>
                     <Input defaultValue={row?.lname} name="lname" onChange={onChange} label="Last Name" type="text" placeholder='Last Name'/>
                     <Input defaultValue={row.dob ? moment(row.dob).format('YYYY-MM-DD'): null } name="dob" onChange={onChange} label="Date of Birth" type="date" placeholder='Date of Birth'/>
                     <Select defaultValue={row?.gender} name="gender" onChange={onChange} label="Gender">
                       <option disabled selected>-- Choose --</option>
                       <option value="M">Male</option>
                       <option value="F">Female</option>
                     </Select>
                     <Input defaultValue={row?.location} name="location" onChange={onChange} label="Location" type="text" placeholder='Location'/>
                     
                     <span className="md:flex hidden"><Button label="SAVE" type="submit" position="right" onClick={() => null }/></span>
                  </div>
                  <div className="space-y-3 flex-1">
                     <Input defaultValue={row?.phone} name="phone" onChange={onChange} label="Phone Number " type="tel" placeholder='Phone Number' />
                     <Input defaultValue={row?.address} name="address" onChange={onChange} label="Address" type="text" placeholder='Address'/>
                     <Input defaultValue={row?.email} name="email" onChange={onChange} label="Email Address" type="email" placeholder='Email Address'/>
                     <Input defaultValue={row?.no_ward} name="no_ward" onChange={onChange} label="Number of Wards" type="number" placeholder='Number of Wards'/>
                     <Input defaultValue={row?.refno} name="refno" onChange={onChange} label="Parent Reference ID" type="text" placeholder='Parent Reference ID'/>
                     <Input defaultValue={row?.password} readonly name="password" onChange={onChange} label="Parent Password" type="text" placeholder='Parent Password'/>
                     
                     <span className="md:hidden flex"><Button label="SAVE" type="submit" position="right" onClick={() => null }/></span>
                  </div>
               </div>
            </form>
        </div>
    </div>
  )
}
export default ParentForm