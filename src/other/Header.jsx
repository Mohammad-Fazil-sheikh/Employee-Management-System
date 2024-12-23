import React from 'react';

function Header({ data, logout }) {
  return (
    <div className='flex justify-between items-center p-5 bg-gradient-to-r from-gray-900 to-black text-white shadow-lg'>
      <h1 className='font-semibold md:text-lg text-base'>
        HELLO <br />
        <span className='font-bold md:text-5xl text-4xl text-blue-600'>{data.name} 👋</span>
      </h1>
      <button onClick={() => logout('login')} className='bg-red-600 md:px-5 shadow py-2 px-3 [@media(max-width:425px)]:text-base rounded-lg text-white font-medium text-lg hover:bg-red-700'>
        Log Out
      </button>
    </div>
  );
}

export default Header;