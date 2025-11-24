import React from "react";

function TaskListNumber({ data }) {
  return (
    <div className="flex  mt-10 screen gap-5 justify-between">
      <div className="p-10 rounded-xl w-[45%] py-6 px-9 bg-blue-400">
        <h2 className="text-2xl font-semibold">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-md ">New Task</h3>
      </div>
      <div className="p-10 rounded-xl w-[45%] py-6 px-9 bg-green-400">
        <h2 className="text-2xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-md ">Completed Task</h3>
      </div>
      <div className="p-10 rounded-xl w-[45%] py-6 px-9 bg-yellow-400">
        <h2 className="text-2xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-md ">Accepted Task</h3>
      </div>
      <div className="p-10 rounded-xl w-[45%] py-6 px-9 bg-red-400">
        <h2 className="text-2xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-md ">Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumber;

// employee1@example.com
// employee2@example.com
// employee3@example.com
// employee4@example.com
// employee5@example.com