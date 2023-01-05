import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import contactEn from './en/contact.json';
import skillEn from './en/skill.json';
import contactVn from './vn/contact.json';
import skillVn from './vn/skill.json';

export const resources = {
  en: {
    skill: skillEn,
    contact: contactEn,
  },
  vn: {skill: skillVn, contact: contactVn},
};

i18next
  .use(initReactI18next)
  .init({resources, lng: 'en', compatibilityJSON: 'v3', keySeparator: false});
export default i18next;
