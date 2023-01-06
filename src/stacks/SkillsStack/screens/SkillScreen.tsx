import {DefaultLayout} from '@components/layout/defaultLayout';
import {LottieImage} from '@components/lottie';
import {useTranslation} from 'react-i18next';

import React from 'react';

import {Text, TouchableOpacity} from 'react-native';

interface IProps {}
export const SkillScreen = ({}: IProps) => {
  const {t, i18n} = useTranslation('skill');
  const _handleChangeLangues = () => {
    i18n.changeLanguage('vn');
  };

  return (
    <DefaultLayout>
      <TouchableOpacity onPress={_handleChangeLangues}>
        <Text>SkillScreen</Text>
        <Text>{`${t('Contact')}`}</Text>
        <Text>{t('Skill')}</Text>

        <LottieImage
          loop
          autoPlay
          source={require('../../../components/lottie/assets/image/196-material-wave-loading.json')}
        />
      </TouchableOpacity>
    </DefaultLayout>
  );
};
