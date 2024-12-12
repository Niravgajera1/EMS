import React from 'react'

const header = (props) => {

  const LogOutUser = ()=>{
     localStorage.setItem("loggedInUser", "");
     props.changeUser('');
    //  window.location.reload();
  }
 
    return (
        <div className="bg-gradient-to-r from-zinc-100 to-zinc-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-end justify-between">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight tracking-wide">
            Hello <br />
            <span className="text-emerald-600 animate-pulse">Nirav</span> 
            <span className="text-4xl ml-2">👋</span>
          </h1>
          
          <button 
            className="
              group relative overflow-hidden 
              bg-emerald-600 text-white 
              px-8 py-3 rounded-xl 
              flex items-center gap-2
              transition duration-300 
              hover:bg-emerald-700 
              focus:outline-none 
              focus:ring-4 focus:ring-emerald-300
              transform hover:scale-105 active:scale-95
              shadow-xl hover:shadow-2xl
            "
            onClick={LogOutUser}
          >
            {/* <LogOut className="w-5 h-5 transition-transform group-hover:rotate-6" /> */}
            Log Out
          </button>
        </div>
      </div>
    );
}

export default header