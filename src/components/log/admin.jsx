import React, { useContext } from 'react';
import Header from '../../other/Header';
import CreatTask from '../../other/CreatTask';
import AllTask from '../../other/AllTask';
import { con } from '../../context/authercon';

function Admin({ logout, data }) {
  const cont = useContext(con);
  const d = cont.filter((item) => item.type === 'employee');

  const fun = (data) => {
    const currentemp = d.filter((item) => item.name === data.name);
    if (currentemp) {
      currentemp[0].tasks.push(data);
      localStorage.setItem('data', JSON.stringify([...cont, ...currentemp]));
    }
  };

  return (
    <div className="w-full h-fit bg-gradient-to-r from-gray-900 to-black text-white">
      <Header data={data} logout={logout}></Header>
      <CreatTask fun={fun}></CreatTask>
      <div className='p-4'>
        <div className='flex items-center justify-between w-full px-10 py-5 font-semibold text-lg flex-wrap bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg shadow-lg'>
          <h4>Task Title</h4>
          <h4>Task Date</h4>
          <h4>Assign to</h4>
          <h4>Task Description</h4>
        </div>
        {d.map((item, ind) => (
          item.tasks.map((item2, ind2) => (
            <AllTask items={item2} emp={item.name} key={ind2}></AllTask>
          ))
        ))}
      </div>
    </div>
  );
}

export default Admin;