import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import en from '../components/locales/en/login.json';
import ar from '../components/locales/ar/login.json';

const resources = {
    en: {
      translation: en
    },
    ar: {
      translation: ar
    }
  };

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    
    lng : 'en',
    resources,
    debug:true ,
    detection :{
        order :['queryString','cookie'],
        cache :['cookie']
    },
    interpolation :{
        escapeValue :false 
    }
})


export default i18n ;