import React from 'react';

function Task({ data, task }) {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-blue-700 lg:w-72 w-40 [@media(max-width:383px)]:w-56 h-32 rounded-lg p-4 m-2 shadow-lg text-white'>
      <h2 className='text-3xl font-bold mb-2'>{data}</h2>
      <h1 className='text-xl font-medium'>{task}</h1>
    </div>
  );
}

export default Task;