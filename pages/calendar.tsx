import React,{ useState,useEffect } from 'react'
import DashLayout from '../components/DashLayout'
import CalendarForm from '../components/form/CalendarForm'
import CalendarList from '../components/list/CalendarList'

function Calendar() {
  const [ page,setPage ] = useState('list')
  const [ row,setRow ] = useState({})
   

  const Switcher = () => {
     var view;
     switch(page){
       case 'list': view = <CalendarList setPage={setPage} setRow={setRow} />; break;
       case 'create': view = <CalendarForm setPage={setPage} row={row} />; break;
       case 'edit': view =  <CalendarForm setPage={setPage} row={row} />; break;
      // default: view = <StudentList setPage={setPage} />; break;
     }
     return view
  }

  return (
    <DashLayout>
       { Switcher() }
    </DashLayout>
  )
}

export default Calendar

