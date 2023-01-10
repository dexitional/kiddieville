import React,{ useState,useEffect } from 'react'
import DashLayout from '../components/DashLayout'
import StudentForm from '../components/form/StudentForm'
import StudentList from '../components/list/StudentList'

function Student() {
  const [ page,setPage ] = useState('list')
  const [ id,setId ] = useState(0)
  const [ row,setRow ] = useState({})
   

  const Switcher = () => {
     var view;
     switch(page){
       case 'list': view = <StudentList setPage={setPage} setRow={setRow} />; break;
       case 'create': view = <StudentForm setPage={setPage} row={row} />; break;
       case 'edit': view =  <StudentForm setPage={setPage} row={row} />; break;
      // default: view = <StudentList setPage={setPage} />; break;
     }
     return view
  }

  useEffect(() => { 
    console.log(page)
  },[page])

  return (
    <DashLayout>
       { Switcher()}
    </DashLayout>
  )
}

export default Student

