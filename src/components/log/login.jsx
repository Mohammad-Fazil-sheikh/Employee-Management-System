import React from 'react';
import { useForm } from 'react-hook-form';

function Login({fun}) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmite = (dat) => {
    fun(dat.email, dat.passs);
    reset();
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-black text-gray-700">
      <div className='flex items-center md:flex-row md:gap-24 flex-col justify-center gap-10 p-5  rounded-lg shadow-lg'>
        <div>
          <h2 className='text-7xl font-bold text-blue-600 tracking-tight'>Log In</h2>
          <h3 className='text-lg font-normal text-center mt-2'>Hey🖐️, Welcome</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmite)} className='flex flex-col items-center justify-center gap-5'>
          <div>
            <h5 className='text-base'>Enter Email</h5>
            <input {...register('email')} className='border-2 rounded border-blue-500 px-4 py-3 outline-none bg-transparent text-gray-900 placeholder:text-blue-300' type="email" placeholder='Enter email' />
          </div>
          <div>
            <h5 className='text-base'>Enter Password</h5>
            <input {...register('passs')} className='border-2 rounded border-blue-500 px-4 py-3 outline-none bg-transparent text-gray-900 placeholder:text-blue-300' type="password" placeholder='Enter password' />
          </div>
          <button className='bg-blue-600 mt-4 hover:bg-white shadow hover:text-blue-600 border border-blue-600 rounded-lg px-12 py-3 outline-none w-full font-semibold text-lg text-white'>Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;