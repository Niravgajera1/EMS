import React from 'react'

const TasksCount = ({data}) => {
  return (
    <div className='flex screen justify-between gap-5 mt-10 p-10'>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-600'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <he className='text-xl font-large'>New Task</he>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-green-600'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <he className='text-xl font-large'>Completed Task</he>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-500'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <he className='text-xl font-large'>Accepted Task</he>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-red-500'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <he className='text-xl font-large'>Failed Task</he>
        </div>
    </div>
  )
}

export default TasksCount