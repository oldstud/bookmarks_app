import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './i18n/config';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import Container from './components/Container'
import { Navigation } from './components/Navigation';
import { Page } from './pages/template/Page';
import { Home } from './pages/Home/Home';




function App() {

  return (
    <div className="App">
       <Navigation
        navButtonTitle = 'Menu' 
        navigationArray = {['Home', 'Contacts']}
        bottomNavigationArray={['Settings']}/>

     <Routes>
          <Route path="/" element={<Home />}/>
          <Route index element={<Page />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Page />} />
        {/* </Route> */}
      </Routes>
  
    </div>
  );
}



export default App;
