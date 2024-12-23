import React from 'react';

function AllTask({ items, emp }) {
  return (
    <div className='w-full p-5 bg-gradient-to-r from-gray-900 to-black rounded-lg shadow-lg mt-5'>
      <div className='flex flex-col md:flex-row justify-between text-white'>
        <div className='mb-2 md:mb-0'>
          <h4 className='text-lg font-semibold'>{items.taskTitle}</h4>
          <p className='text-sm text-gray-400'>{items.taskDate}</p>
        </div>
        <div className='mb-2 md:mb-0'>
          <h4 className='text-lg font-semibold'>{emp}</h4>
        </div>
        <div className='mb-2 md:mb-0'>
          <p className='text-sm text-gray-400'>{items.taskDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default AllTask;