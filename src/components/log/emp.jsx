// import React from 'react'
// import Header from '../../other/header'
// import Task from '../../other/Task'
// import TaskList from '../../other/TaskList'



// function emp({data,logout}) {
// //  console.log(data.taskCounts)
//   return (
//     <>
//       <Header logout={logout} data={data}></Header>
//       <div className='flex flex-wrap w-full items-center justify-evenly p-2 md:p-4'>
//       <Task  task={"Active Task"} data={data.taskCounts.active}></Task>
//       <Task task={"New Task"} data={data.taskCounts.newTask}></Task>
//       <Task task={"Completed Task"} data={data.taskCounts.completed}></Task>
//       <Task task={"Failed Task"} data={data.taskCounts.failed}></Task>
//       </div>
//       <div className='p-2 mt-7 h-fit w-full flex justify-center gap-10 flex-wrap'>
//         {data.tasks.map((task,ind )=> <TaskList task={task} key={ind}></TaskList>)}    
//       </div>
//     </>
//   )
// }

// export default emp

import React from 'react';
import Header from '../../other/Header';
import Task from '../../other/Task';
import TaskList from '../../other/TaskList';

function Emp({ logout, data }) {
  return (
    <div className='w-full h-screen max-h-[200vh] bg-gradient-to-r from-gray-900 to-black text-white'>
      <Header logout={logout} data={data}></Header>
      <div className='flex flex-wrap w-full items-center justify-evenly p-4'>
        <Task task={"Active Task"} data={data.taskCounts.active}></Task>
        <Task task={"New Task"} data={data.taskCounts.newTask}></Task>
        <Task task={"Completed Task"} data={data.taskCounts.completed}></Task>
        <Task task={"Failed Task"} data={data.taskCounts.failed}></Task>
      </div>
      <div className='p-4 mt-7 h-fit w-full flex justify-center gap-10 flex-wrap bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg shadow-lg'>
        {data.tasks.map((task, ind) => <TaskList task={task} key={ind}></TaskList>)}
      </div>
    </div>
  );
}

export default Emp;