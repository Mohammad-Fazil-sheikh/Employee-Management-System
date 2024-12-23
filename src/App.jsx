// import React, { useState } from 'react';
// import Login from './components/log/login';
// import Admin from './components/log/admin';
// import Emp from './components/log/emp';
// import { setdata, getdata, data } from './utils/localstorage';
// import { useContext } from 'react';
// import { con } from './context/authercon';

// function App() {
//   setdata(data);
//   const somthing = useContext(con)
    

//   const [currentComponent, setCurrentComponent] = useState('login'); 
//   const [loginuser, setloginuser] = useState()
//   const [user, setuser] = useState()
  
  
//   const func = (email, pass) => {
//     // Check if the user email and password match any in the data
//     const  matchedUser = data.find(itm => itm.email === email && itm.pass === pass);
    
//     if (matchedUser) {
      
//       if (matchedUser.type === 'admin') {
//         setCurrentComponent('admin');
//         setloginuser(matchedUser);
//         setuser(matchedUser);
//         console.log(user);
//         console.log({loginuser});
//       } 
      
//       else if (matchedUser.type === 'employee') {
//         setCurrentComponent('emp');
//         setloginuser(matchedUser);
//       }
//     } else {
      
//       alert('Invalid email or password');
//     }
//   };

//   return (
//     <>
//       {currentComponent === 'login' && <Login fun={func} />} 
//       {currentComponent === 'admin' && <Admin />} 
//       {currentComponent === 'emp' && <Emp data={loginuser}/>} 
//     </>
//   );
// }

// export default App;




import React, { useState, useEffect, useContext } from 'react';
import Login from './components/log/login';
import Admin from './components/log/admin';
import Emp from './components/log/emp';
import { data } from './utils/localstorage';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  

  const [currentComponent, setCurrentComponent] = useState('login');
  const [loginuser, setLoginUser] = useState(null); // Renamed to follow convention

  const func = (email, pass) => {
    // Check if the user email and password match any in the data
    const matchedUser = data.find(itm => itm.email === email && itm.pass === pass);

    if (matchedUser) {
      setLoginUser(matchedUser);

      // Change component based on user type
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
      // console.log('Login user:', loginuser); // Log the login user when it's set
    }
  }, [loginuser]); // This will trigger whenever `loginuser` state changes

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
