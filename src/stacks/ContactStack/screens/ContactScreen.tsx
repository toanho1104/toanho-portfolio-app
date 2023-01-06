import {DefaultLayout} from '@components/layout/defaultLayout';
import {MyText} from '@components/text';
import {useTheme} from '@hooks/useTheme';
import {useTranslation} from 'react-i18next';

import React from 'react';

import {Text, TouchableNativeFeedback} from 'react-native';

interface IProps {}
export const ContactScreen = ({}: IProps) => {
  const {colors, setThemeMode, themeMode} = useTheme();
  const {t} = useTranslation('contact');

  const _handlePress = () => {
    if (themeMode === 'dark') {
      setThemeMode('light');
    } else {
      setThemeMode('dark');
    }
  };

  return (
    <DefaultLayout>
      <TouchableNativeFeedback onPress={_handlePress}>
        <Text style={{color: colors.PRIMARY}}>ContactScreen</Text>
      </TouchableNativeFeedback>
      <Text style={{color: colors.PRIMARY}}>{t('Contact')}</Text>
      <MyText font="regular" type="subtitle" color={colors.TEXT_DARK}>
        super text component
      </MyText>
    </DefaultLayout>
  );
};
