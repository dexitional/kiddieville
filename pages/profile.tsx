import React,{ useState,useEffect } from 'react'
import DashLayout from '../components/DashLayout'
import Profile from '../components/list/Profile'

function MainPage() {
  const [ page,setPage ] = useState('list')
  const [ id,setId ] = useState(0)
  const [ row,setRow ] = useState({})
   
  useEffect(() => { 
    console.log(page)
  },[page])

  return (
    <DashLayout>
      <Profile />
    </DashLayout>
  )
}

export default MainPage

