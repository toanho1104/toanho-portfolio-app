import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
interface IProps {}
export const SkillScreen = ({}: IProps) => {
  const {t, i18n} = useTranslation(['skill']);
  console.log({t});
  const _handleChangeLangues = () => {
    i18n.changeLanguage('vn');
  };
  return (
    <TouchableOpacity onPress={_handleChangeLangues}>
      <Text>SkillScreen</Text>
      <Text>{t('skill')}</Text>
    </TouchableOpacity>
  );
};
