import React, { useState, useEffect, useContext } from 'react';
import Login from './components/log/login';
import Admin from './components/log/admin';
import Emp from './components/log/emp';
import { data } from './utils/localstorage';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  

  const [currentComponent, setCurrentComponent] = useState('login');
  const [loginuser, setLoginUser] = useState(null); 

  const func = (email, pass) => {
    const matchedUser = data.find(itm => itm.email === email && itm.pass === pass);

    if (matchedUser) {
      setLoginUser(matchedUser);
      if (matchedUser.type === 'admin') {
        setCurrentComponent('admin');
      } else if (matchedUser.type === 'employee') {
        setCurrentComponent('emp');
      }
    } else {
      toast.error('Invalid email or password');
    }
  };

  useEffect(() => {
    if (loginuser) {
    }
  }, [loginuser]);

  return (
    <>
      {currentComponent === 'login' && <Login fun={func}/>}
      {currentComponent === 'admin' && <Admin data={loginuser} logout={setCurrentComponent}/>}
      {currentComponent === 'emp' && <Emp data={loginuser}  logout={setCurrentComponent}/>}
      <ToastContainer theme="colored"></ToastContainer>
    </>
  );
}

export default App;
