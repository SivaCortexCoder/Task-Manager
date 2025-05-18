import React from "react";
import { useNavigate } from "react-router-dom";

const Create = ({ taskData, handleTaskData, handleSubmit, editingIndex }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <section className="w-full max-w-xl bg-[#111827] text-white p-6 rounded-lg shadow-lg border border-white">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          {editingIndex === null ? "Create New Task" : "Edit Task"}
        </h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => handleSubmit(e, navigate)}
        >
          <div className="flex flex-col">
            <label htmlFor="Task-name" className="mb-1">
              Task Name
            </label>
            <input
              className="bg-[#1F2937] border border-gray-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="Task-name"
              placeholder="Enter Task Name"
              value={taskData.name}
              onChange={(e) => handleTaskData("name", e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Task-Description" className="mb-1">
              Task Description
            </label>
            <textarea 
              className="bg-[#1F2937] border border-gray-600 px-4 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="Task-Description"
              placeholder="Enter Task Description"
              value={taskData.desc}
              onChange={(e) => handleTaskData("desc", e.target.value)}
              rows={4}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 cursor-pointer hover:bg-blue-700 transition px-4 py-2 rounded text-white font-medium mt-4"
          >
            {editingIndex === null ? "Add Task +" : "Update Task"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Create;
