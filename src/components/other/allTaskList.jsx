import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const allTaskList = () => {
    const [userData,setUserData] = useContext(AuthContext)
    return (
        <div className="p-6 mt-20 mr-10 ml-10 rounded bg-gray-100">
            <div className="grid grid-cols-5 gap-4 bg-emerald-300 border-b-2 border-gray-300 rounded p-4">
                <h2 className="text-lg font-bold text-gray-800">Employee Name</h2>
                <h2 className="text-lg font-bold text-gray-800">New Task</h2>
                <h2 className="text-lg font-bold text-gray-800">Active Task</h2>
                <h2 className="text-lg font-bold text-gray-800">Completed Task</h2>
                <h2 className="text-lg font-bold text-gray-800">Failed Task</h2>
            </div>
            <div className="divide-y divide-gray-300">
                {userData.map((ele) => (
                    <div key={ele.id} className="grid grid-cols-5 gap-4 py-4">
                        <h2 className="text-md text-gray-700 font-medium">{ele.firstName}</h2>
                        <h2 className="text-md text-gray-700">{ele.taskNumbers.newTask}</h2>
                        <h2 className="text-md text-gray-700">{ele.taskNumbers.active}</h2>
                        <h2 className="text-md text-gray-700">{ele.taskNumbers.completed}</h2>
                        <h2 className="text-md text-gray-700">{ele.taskNumbers.failed}</h2>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default allTaskList