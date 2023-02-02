import {useTheme} from '@hooks/useTheme';
import {useTranslation} from 'react-i18next';

import React from 'react';

import {TouchableOpacity} from 'react-native';

import {DefaultLayout} from '@components/layout/defaultLayout';
import {LottieImage} from '@components/lottie';
import {MyText} from '@components/text';

interface IProps {}
export const SkillScreen = ({}: IProps) => {
  const {t, i18n} = useTranslation('contact');
  const {colors} = useTheme();
  const _handleChangeLangues = () => {
    i18n.changeLanguage('vn');
  };

  const _handleChangeLanguesEn = () => {
    i18n.changeLanguage('en');
  };

  return (
    <DefaultLayout>
      <TouchableOpacity onPress={_handleChangeLangues}>
        <MyText color={colors.TEXT_DARK}>{`${t('Contact')}`}</MyText>
      </TouchableOpacity>
      <TouchableOpacity onPress={_handleChangeLanguesEn}>
        <MyText color={colors.TEXT_DARK}>{`${t('Contact')}`}</MyText>
      </TouchableOpacity>

      <LottieImage
        loop
        autoPlay
        source={require('../../../components/lottie/assets/image/noImage.json')}
      />
    </DefaultLayout>
  );
};
