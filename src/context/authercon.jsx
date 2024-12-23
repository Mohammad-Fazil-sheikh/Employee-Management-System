import React, { createContext, useState } from 'react'
import { data, getdata, setdata } from '../utils/localstorage';
import { useEffect } from 'react';

export const con = createContext();

function authercon({children}) {
  const [databas, setdatabas] = useState()

  useEffect(() => {
    localStorage.clear();
    setdata(data);
    setdatabas(data);
  }, [databas])
  

  return (
   
           <con.Provider value={databas}>
            {children}
            </con.Provider>
    
  )
}

export default authercon