import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContext)

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [asign, setAsign] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [newTask , setNewTask] = useState({}) ;



  const handleSubmit = (e) => {
      e.preventDefault();
      setNewTask({title, date, category ,description, active:false,newTask:true,completed:false,failed:false});

      const data = userData 
       
      data.forEach(element => {
           if(asign == element.firstName){
              element.tasks.push(newTask)
              element.taskNumbers.newTask =  element.taskNumbers.newTask + 1
           }
      });
        setUserData(data);
       setTitle('');
       setAsign('');
       setDate("");
       setCategory('');
       setDescription('');
    };

  return (
    <div
      className="
            mx-10 
            mt-10 
            rounded-xl 
            bg-gray-100 
            shadow-2xl 
            overflow-hidden "
    >
      <form
        className="
                flex 
                flex-wrap 
                w-full 
                items-start 
                justify-between 
                p-8 
                space-x-10"
        onSubmit={(e)=>{
              handleSubmit(e)
        }}
      >
        <div className="w-1/2 space-y-6">
          <div>
            <h3
              className="
                    text-lg 
                    font-medium 
                    text-gray-700 
                    mb-2 
                    tracking-wide
            "
            >
              Task Title
            </h3>
            <input
              className="
                   text-black
                    w-full 
                    px-4 
                    py-2 
                    border 
                    border-gray-300 
                    rounded-lg 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-emerald-500 
                    focus:border-transparent 
                    transition 
                    duration-300 
                    hover:border-emerald-500
                                    "
              placeholder="Enter task title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div>
            <h3
              className="
                    text-lg 
                    font-medium 
                    text-gray-700 
                    mb-2 
                    tracking-wide
            "
            >
              Date
            </h3>
            <input
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              type="date"
              className="
                    text-black
                    w-full 
                    px-4 
                    py-2 
                    border 
                    border-gray-300 
                    rounded-lg 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-emerald-500 
                    focus:border-transparent 
                    transition 
                    duration-300 
                    hover:border-emerald-500
                    text-gray-700
              "
            />
          </div>
          <div>
            <h3
              className="
                    text-lg 
                    font-medium 
                    text-gray-700 
                    mb-2 
                    tracking-wide
            "
            >
              Assign To
            </h3>
            <input
              value={asign}
              onChange={(e) => {
                setAsign(e.target.value);
              }}
              className="
                       text-black
                        w-full 
                        px-4 
                        py-2 
                        border 
                        border-gray-300 
                        rounded-lg 
                        focus:outline-none 
                        focus:ring-2 
                        focus:ring-emerald-500 
                        focus:border-transparent 
                        transition 
                        duration-300 
                        hover:border-emerald-500
                                "
              placeholder="Select assignee"
            />
          </div>
          <div>
            <h3
              className="
                    text-lg 
                    font-medium 
                    text-gray-700 
                    mb-2 
                    tracking-wide
            "
            >
              Category
            </h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="
                   text-black
                    w-full 
                    px-4 
                    py-2 
                    border 
                    border-gray-300 
                    rounded-lg 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-emerald-500 
                    focus:border-transparent 
                    transition 
                    duration-300 
                    hover:border-emerald-500
              "
              placeholder="Select category"
            />
          </div>
        </div>
        <div className="w-2/5 space-y-6">
          <div>
            <h3
              className="
                text-lg 
                font-medium 
                text-gray-700 
                mb-2 
                tracking-wide
            "
            >
              Description
            </h3>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="
               text-black
                w-full 
                px-4 
                py-2 
                border 
                border-gray-300 
                rounded-lg 
                h-48 
                resize-none 
                focus:outline-none 
                focus:ring-2 
                focus:ring-emerald-500 
                focus:border-transparent 
                transition 
                duration-300 
                hover:border-emerald-500
              "
              placeholder="Enter task description"
            ></textarea>
          </div>
          <button
            className="
                    w-full 
                    bg-emerald-600 
                    text-white 
                    py-3 
                    rounded-lg 
                    font-bold 
                    tracking-wider 
                    hover:bg-emerald-700 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-emerald-500 
                    focus:ring-opacity-50 
                    transition 
                    duration-300 
                    transform 
                    hover:scale-[1.02] 
                    active:scale-[0.98]
            "
          >
            CREATE TASK
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
