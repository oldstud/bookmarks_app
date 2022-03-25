import React from "react";
import Container from "../../components/Container";
import '../../i18n/config';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { Navigation } from '../../components/Navigation';


export const Contacts:React.FC = () => {

    const { t } = useTranslation();

    const changeLanguage = (lng: string) => {
      i18next.changeLanguage(lng);
    }
    return (
        <>
        <Navigation
          navButtonTitle = 'Menu' 
          navigationArray = {['Home', 'Contacts']}
          bottomNavigationArray={['Settings']}
        />

        <Container title={ t('title_1') }>
        <>
          <button onClick={() => changeLanguage('ru')}>ru leng</button>
          <button onClick={() => changeLanguage('en')}>en leng</button>
          <button onClick={() => changeLanguage('ua')}>ua leng</button>
        </>
      </Container>

        <p>{ t('title_1') }</p>
      </>
    )
}