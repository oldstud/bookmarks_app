import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './i18n/config';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import Container from './components/Container'


function App() {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng);
  }

  return (
    <div className="App">
      <Container title={ t('title_1') }>
        <>
          <button onClick={() => changeLanguage('ru')}>ru leng</button>
          <button onClick={() => changeLanguage('en')}>en leng</button>
          <button onClick={() => changeLanguage('ua')}>ua leng</button>
        </>
      </Container>

     <p>{ t('title_1') }</p>

     <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={< Error/>} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function About() {
  return (
    <div>
      <h2>Artur and Dima </h2>
    </div>
  );
}

function Error() {
  return (
    <div>
      <p>404</p>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}




export default App;
