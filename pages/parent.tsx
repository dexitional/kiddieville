import React,{ useState,useEffect } from 'react'
import DashLayout from '../components/DashLayout'
import ParentForm from '../components/form/ParentForm'
import ParentList from '../components/list/ParentList'

function Parent() {
  const [ page,setPage ] = useState('list')
  const [ row,setRow ] = useState({})
   

  const Switcher = () => {
     var view;
     switch(page){
       case 'list': view = <ParentList setPage={setPage} setRow={setRow} />; break;
       case 'create': view = <ParentForm setPage={setPage} row={row} />; break;
       case 'edit': view =  <ParentForm setPage={setPage} row={row} />; break;
     }
     return view
  }

  return (
    <DashLayout>
       { Switcher()}
    </DashLayout>
  )
}

export default Parent

