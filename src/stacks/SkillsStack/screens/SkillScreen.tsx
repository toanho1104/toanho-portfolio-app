import {DefaultLayout} from '@components/layout/defaultLayout';
import {LottieImage} from '@components/lottie';
import {TextCustom} from '@components/text';
import {useTheme} from '@hooks/useTheme';
import {useTranslation} from 'react-i18next';

import React from 'react';

import {Text, TouchableOpacity} from 'react-native';

interface IProps {}
export const SkillScreen = ({}: IProps) => {
  const {t, i18n} = useTranslation('skill');
  const {colors} = useTheme();
  const _handleChangeLangues = () => {
    i18n.changeLanguage('vn');
  };

  return (
    <DefaultLayout>
      <TouchableOpacity onPress={_handleChangeLangues}>
        <Text>SkillScreen</Text>
        <TextCustom color={colors.TEXT_DARK}>{`${t('Contact')}`}</TextCustom>
        <Text>{t('Skill')}</Text>

        <LottieImage
          loop
          autoPlay
          source={require('../../../components/lottie/assets/image/noImage.json')}
          style={{width: 190, height: 190}}
        />
      </TouchableOpacity>
    </DefaultLayout>
  );
};
