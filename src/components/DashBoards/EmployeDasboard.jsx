import React from 'react'
import Headre from "../other/header"
import TasksCount from '../other/TasksCount'
import Tasklist from '../Task/Tasklist'

const EmployeDasboard = (props) => {
  return (
    <div className='h-screen'>
        <Headre changeUser={props.changeUser} data={props.data}/>
        <TasksCount changeUser={props.changeUser} data={props.data}/>
        <Tasklist changeUser={props.changeUser} data={props.data}/>
    </div>
  )
}

export default EmployeDasboard