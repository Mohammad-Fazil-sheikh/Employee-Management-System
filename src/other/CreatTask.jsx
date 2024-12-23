// import React from 'react'
// import { useForm } from 'react-hook-form';

// function CreatTask({fun}) {
//   const { register, handleSubmit,reset } = useForm();
  
  // const func=(dat)=>{
  //   // fun(dat);
  //   const datas={...dat,active: true,
  //     newTask: true,
  //     completed: false,
  //     failed: false,};
  //   // console.log(datas)
  //   fun(datas);
  //   reset();
  // };


//   return (
//     <div className=' w-full [@media(max-width:425px)]:w-full text-gray-700 capitalize'>
//         <form className=' flex [@media(max-width:425px)]:flex-col  items-center justify-between md:p-10 p-5 gap-4'>
//             <div className='flex flex-col'>
//                 task title<input type="text" {...register('taskTitle')} placeholder='enter task' className='border-2 text-base rounded border-black px-3 py-3 [@media(max-width:425px)]:px-6 [@media(max-width:425px)]:py-4 w-full outline-none bg-gray-200 text-gray-700 placeholder:text-black'/>
//                 date <input type="date" {...register('taskDate')} placeholder="Enter task date" className='border-2 text-base rounded border-black px-3 py-3 [@media(max-width:425px)]:px-6 [@media(max-width:425px)]:py-4 w-full outline-none b
//                  text-gray-700 placeholder:text-black'/>
//                 assigned <input {...register('name')} type="text" placeholder="Enter task assigned" className='border-2 text-base rounded border-black px-3 [@media(max-width:425px)]:px-6 [@media(max-width:425px)]:py-4 py-3 w-full outline-none bg-gray-200 text-gray-700 placeholder:text-black'/>
//             </div>
//             <div className='flex flex-col gap-10'>
//                <div>  details <textarea name="" id="" {...register('taskDescription')} className='border-2 rounded w-full border-black sm:px-5 sm:py-4 px-2 py-2 outline-none bg-gray-200 text-gray-700  placeholder:text-black'></textarea>
               
//                 </div> 
//                 <button onClick={handleSubmit(func)} className='bg-blue-600 px-4 py-2 shadow  [@media(max-width:425px)]:py-2 text-white rounded'> creat task</button>
              
//             </div>
//         </form>
//     </div>
//   )
// }

// export default CreatTask


import React from 'react';
import { useForm } from 'react-hook-form';

function CreatTask({ fun }) {
  const { register, handleSubmit } = useForm();
  const func=(dat)=>{
    // fun(dat);
    const datas={...dat,active: true,
      newTask: true,
      completed: false,
      failed: false,};
    // console.log(datas)
    fun(datas);
    reset();
  };

  return (
    <div className='w-full [@media(max-width:425px)]:w-full text-gray-700 capitalize'>
      <form className='flex [@media(max-width:425px)]:flex-col items-center justify-between md:p-10 p-5 gap-4'>
        <div className='flex flex-col'>
          task title
          <input type="text" {...register('taskTitle')} placeholder='enter task' className='border-2 text-base rounded border-black px-3 py-3 [@media(max-width:425px)]:px-6 [@media(max-width:425px)]:py-4 w-full outline-none bg-gray-200 text-gray-700 placeholder:text-black' />
          date
          <input type="date" {...register('taskDate')} placeholder="Enter task date" className='border-2 text-base rounded border-black px-3 py-3 [@media(max-width:425px)]:px-6 [@media(max-width:425px)]:py-4 w-full outline-none bg-gray-200 text-gray-700 placeholder:text-black' />
          assigned
          <input {...register('name')} type="text" placeholder="Enter task assigned" className='border-2 text-base rounded border-black px-3 py-3 [@media(max-width:425px)]:px-6 [@media(max-width:425px)]:py-4 w-full outline-none bg-gray-200 text-gray-700 placeholder:text-black' />
          category
          <input {...register('category')} type="text" placeholder="Enter task category" className='border-2 text-base rounded border-black px-3 py-3 [@media(max-width:425px)]:px-6 [@media(max-width:425px)]:py-4 w-full outline-none bg-gray-200 text-gray-700 placeholder:text-black' />
        </div>
        <div className='flex flex-col gap-10'>
          <div>
            details
            <textarea name="" id="" {...register('taskDescription')} className='border-2 rounded w-full border-black sm:px-5 sm:py-4 px-2 py-2 outline-none bg-gray-200 text-gray-700 placeholder:text-black'></textarea>
          </div>
          <button onClick={handleSubmit(func)} className='bg-blue-600 px-4 py-2 shadow [@media(max-width:425px)]:py-2 text-white rounded'>create task</button>
        </div>
      </form>
    </div>
  );
}

export default CreatTask;