import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import ComplatedTask from './ComplatedTask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {
    return (
        <div id="taskbar" className='h-[55%] mx-10 p-10  overflow-x-auto flex items-center  gap-6 flex-nowrap justify-start bg-gray-100'>
            {
                data.tasks.map((ele, index) => {
                    if (ele.active) {
                        return <AcceptTask data={ele} key={index} />
                    }
                    if (ele.newTask) {
                        return <NewTask data={ele} key={index} />
                    }
                    if (ele.completed) {
                        return <ComplatedTask data={ele} key={index} />
                    }
                    if (ele.failed) {
                        return <FailedTask data={ele} key={index} />
                    }
                })
            }
        </div>
    )
}

export default Tasklist