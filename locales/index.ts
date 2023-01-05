import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import translationEn from './en/demoEn.json';
import skillEn from './en/skill.json';
import translationVn from './vn/demoVn.json';
import skillVn from './vn/skill.json';

export const resources = {
  en: {
    translation: translationEn,
    skill: skillEn,
  },
  vn: {translation: translationVn, skill: skillVn},
};

i18next
  .use(initReactI18next)
  .init({resources, lng: 'en', compatibilityJSON: 'v3'});
export default i18next;
