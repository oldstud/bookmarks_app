import React from 'react';
import { Routes, Route } from "react-router-dom";
import './i18n/config';
import { Home } from './pages/Home/Home';
import { AuthPage } from './pages/Auth/AuthPage';
import { PrivateRoute, PublicRoute } from './components/RoutesComponents'
import { Contacts } from './pages/Contact/Contacts';

function App() {

  return (
    <>
     <Routes>
       
     <Route path="/" element={ 
       <PublicRoute redirectTo="/home" restricted >
          <AuthPage />
       </PublicRoute>   
     }/>

     <Route path="/home" element={ 
        <PrivateRoute redirectTo="/" >
          <Home />
        </PrivateRoute>
     }/> 
     <Route path="/contacts" element={ 
        <PrivateRoute redirectTo="/" >
          <Contacts />
        </PrivateRoute>
     }/> 

     <Route path='*' element={ 
        <h2>404 page error</h2>
     }/> 

    </Routes> 
    </>
  );
}



export default App;
