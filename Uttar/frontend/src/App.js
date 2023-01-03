import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './components/auth/Login';
import { auth } from './components/firebase';
import Uttar from './components/Uttar';
import { login, selectUser } from './feature/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // const [currentForm, setCurrentForm] = useState('login');
  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
 // }

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if(authUser) {
        dispatch(
          login({
          userName: authUser.displayName,
          photo: authUser.photoURL,
          email: authUser.email,
          uid: authUser.uid
        })
        );
        console.log('AuthUser', authUser)
      }
    });
  }, [dispatch]);
  return (
    <div className='App'>
      {/* {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      } */}
      { user ? <Uttar /> : <Login /> } 
    </div>
  );
}

export default App;
