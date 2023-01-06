import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import skillEn from './en/contact.json';
import globalEn from './en/global.json';
import contactEn from './en/skill.json';
import contactVn from './vn/contact.json';
import globalVn from './vn/global.json';
import skillVn from './vn/skill.json';

export const resources = {
  en: {
    skill: skillEn,
    contact: contactEn,
    translation: globalEn,
  },
  vn: {skill: skillVn, contact: contactVn, translation: globalVn},
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  compatibilityJSON: 'v3',
});
export default i18next;
