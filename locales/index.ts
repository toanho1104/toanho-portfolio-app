import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import translationVn from './vn/demoVn.json';
import translationEn from './en/demoEn.json';
import skill from './en/skill.json';

export const resources = {
  en: {
    translation: translationEn,
    skill: skill,
  },
  vn: {translation: translationVn},
};

i18next
  .use(initReactI18next)
  .init({resources, lng: 'en', compatibilityJSON: 'v3'});
export default i18next;
