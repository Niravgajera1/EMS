import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeDasboard from './components/DashBoards/EmployeDasboard'
import AdminDashboard from './components/DashBoards/AdminDashboard'
import { setLocalStorage } from './utils/localstorage'
import { AuthContext } from './context/AuthProvider'
// import './index.css';

const App = () => {
  // localStorage.clear();

  useEffect(() => {
    setLocalStorage();
  },)

  useEffect(() => {
     const loggedInUser = localStorage.getItem('loggedInUser');
     if(loggedInUser){
      const userData = JSON.parse(loggedInUser)


      setUser(userData.role);
      setLoggedInUSer(userData.data);
     }
  },[])

  const [user, setUser] = useState(null)
  const [loggedInUser , setLoggedInUSer] = useState(null);
  const [userData, setUserData] = useContext(AuthContext)

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin")
      localStorage.setItem("loggedInUser", JSON.stringify({role:"admin"}))

    } else if (userData) {
      const employee = userData.find((e)=> email == e.email && password == e.password)
      if(employee){
        setUser('employee')
        setLoggedInUSer(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({role:"employee", data : employee}))
      }
    } else {
      alert("Invelid Credentials")
    }
  }


  return (
    <>
      {!user ? <Login  handleLogin={handleLogin} /> : ''}
      {user == "admin" ? <AdminDashboard changeUser= {setUser} /> :(user == 'employee' ? <EmployeDasboard changeUser= {setUser} data={loggedInUser} /> : null ) }
      {/* <EmployeDasboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App