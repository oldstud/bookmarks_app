import React from 'react';

import './App.css';
import './i18n/config';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function App() {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng);
  }

  return (
    <div className="App">
     <p>{ t('title_1') }</p>

      <button onClick={() => changeLanguage('ru')}>ru leng</button>
      <button onClick={() => changeLanguage('en')}>en leng</button>
      <button onClick={() => changeLanguage('ua')}>ua leng</button>
    </div>
  );
}

export default App;
