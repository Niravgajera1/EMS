import React from 'react'

const AcceptTask = ({data}) => {
    return (
        <div className='flex-shrink-0 bg-yellow-500 h-full p-5 w-[400px] rounded-lg shadow-2xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.category}</h3>
                <h4 className='text-sm text-gray-700'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold text-gray-900 mb-3 hover:text-gray-700 transition-colors'>{data.taskTitle}</h2>
            <p className='text-lg  mt-2 text-gray-800 opacity-90 hover:opacity-100 transition-opacity'>{data.taskDescription}</p>
            <div className='flex space-x-3 mt-4'>
                <button
                    className='flex items-center justify-center w-full bg-green-500 text-white 
                     px-4 py-2 rounded-lg hover:bg-green-600 transition-colors 
                     focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50
                     active:bg-green-700 shadow-md hover:shadow-lg'
                >
                    {/* <Check className='mr-2' size={20} /> */}
                    Mark As Accepted
                </button>
                <button
                    className='flex items-center justify-center w-full bg-red-500 text-white 
                       px-4 py-2 rounded-lg hover:bg-red-600 transition-colors 
                      focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50
                       active:bg-red-700 shadow-md hover:shadow-lg'
                >
                    {/* <X className='mr-2' size={20} /> */}
                    Mark As Failed
                </button>
            </div>
        </div>
    )
}

export default AcceptTask