import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'
import Footer from '../other/Footer'

function EmployeeDashboard(props) {
  // console.log("employeejsx: ",props);
  
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>

    <Header changeUser={props.changeUser} data={props.data}/>
    <TaskListNumber changeUser={props.changeUser} data={props.data}/>
    <TaskList changeUser={props.changeUser}  data={props.data}/>

      <Footer/>

    </div>
  )
}

export default EmployeeDashboard