// import React from 'react'

// function TaskList({task}) {
//   // console.log(task.Date)
//   return (
//     <div className='w-80 h-fit bg-green-400 text-white p-5 rounded-lg'>
//         <div className='flex justify-between mb-3'>
//         <h4 className='bg-red-600 px-2 py-1'>{task.category}</h4>
//         <h4>{task.taskDate}</h4>
//         </div>
//         <h4 className='text-xl font-bold text-center mb-2'>{task.taskTitle}</h4>
//         <p className='text-sm font-medium  text-center'>{task.taskDescription}</p>
//         <div className='flex items-center justify-center mt-4'>
//         <button className='px-4 py-1 rounded bg-blue-600 text-white'>Accept Task</button>
//         </div>
//     </div>
//   )
// }

// export default TaskList
import React from 'react';

function TaskList({ task }) {
  return (
    <div className='w-80 h-fit bg-gradient-to-r from-gray-900 to-black text-white p-5 rounded-lg shadow-lg'>
      <div className='flex justify-between mb-3'>
        <h4 className='bg-red-600 px-2 py-1 rounded'>{task.category}</h4>
        <h4 className='text-gray-400'>{task.taskDate}</h4>
      </div>
      <h4 className='text-xl font-bold text-center mb-2 text-blue-600'>{task.taskTitle}</h4>
      <p className='text-sm font-medium text-center text-gray-400'>{task.taskDescription}</p>
      <div className='flex items-center justify-center mt-4'>
        <button className='px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700'>Accept Task</button>
      </div>
    </div>
  );
}

export default TaskList;