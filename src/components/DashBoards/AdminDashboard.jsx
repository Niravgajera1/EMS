import React from 'react'
import Headre from '../other/header'
import CreateTask from '../other/CreateTask'
import AllTaskList from '../other/allTaskList'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full '>
        <Headre changeUser={props.changeUser} />
        <CreateTask />
        <AllTaskList/>
    </div>
  )
}

export default AdminDashboard