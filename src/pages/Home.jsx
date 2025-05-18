import React, { useState,useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useNavigate } from "react-router-dom";

const Home = ({ tasks, handleEdit, handleDelete }) => {
  const navigate = useNavigate();

  const [completedStatus, setCompletedStatus] = useState(
    tasks.map(() => "Pending")
  );
  const [searchQuery, setSearchQuery] = useState("");

  const handleStatus = (index) => {
    const updatedStatus = [...completedStatus];
    updatedStatus[index] = "Completed";
    setCompletedStatus(updatedStatus);
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-10">
      <div className="md:flex justify-between items-center ">
        <button
          onClick={() => navigate("/create")}
          className="bg-[#111827] cursor-pointer text-white px-3 py-2 border border-white rounded-sm"
        >
          + Create New Task
        </button>

        <form className="">
          <input
            type="text"
            placeholder="Search Tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-1 w-full bg-[#1F2937] text-white border-white mt-5 px-6 rounded-lg py-2  focus:outline-none"
          />
        </form>
      </div>

      <div className="grid gap-5 md:grid-cols-2 mt-5">
        {filteredTasks.length === 0 ? (
          <p className="text-white">No tasks yet.</p>
        ) : (
          filteredTasks.map((task, index) => (
            <TaskCard
              key={index}
              name={task.name}
              desc={task.desc}
              handleEdit={handleEdit}
              index={index}
              navigate={navigate}
              handleDelete={handleDelete}
              handleStatus={handleStatus}
              complete={completedStatus[index]}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
