import React, { useState } from 'react'


const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const HandleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email,password)
        setEmail("");
        setPassword("");

    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-white from-emerald-100 to-emerald-300 p-4">
            <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div className="bg-emerald-600 py-6 px-8">
                    <h1 className="text-3xl font-bold text-white text-center tracking-wider">Login</h1>
                </div>
                <form className="p-8 space-y-6" onSubmit={(e) => {
                    HandleSubmit(e);
                }}>
                    <div className="relative">
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full px-4 py-3 text-gray-700 bg-gray-100 rounded-lg border-2 border-transparent focus:border-emerald-500 focus:ring-emerald-300 transition duration-300 ease-in-out placeholder-gray-500"
                        />
                        <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>

                    <div className="relative">
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            type="password"
                            placeholder="Enter Your Password"
                            className="w-full px-4 py-3 text-gray-700 bg-gray-100 rounded-lg border-2 border-transparent focus:border-emerald-500  focus:ring-emerald-300 transition duration-300 ease-in-out placeholder-gray-500"
                        />
                        <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
                    >
                        Log In
                    </button>

                    {/* <div className="text-center">
            <a href="#" className="text-emerald-600 hover:text-emerald-800 text-sm transition duration-300 ease-in-out">
              Forgot Password?
            </a>
          </div> */}
                </form>
            </div>
        </div>
    )
}

export default Login