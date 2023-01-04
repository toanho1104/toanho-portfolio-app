import {useTheme} from '@hooks/useTheme';
import React from 'react';
import {Text, TouchableNativeFeedback, View} from 'react-native';
interface IProps {}
export const ContactScreen = ({}: IProps) => {
  const {colors, setThemeMode, themeMode} = useTheme();
  console.log;

  const _handlePress = () => {
    if (themeMode === 'dark') {
      setThemeMode('light');
    } else {
      setThemeMode('dark');
    }
  };

  return (
    <TouchableNativeFeedback onPress={_handlePress}>
      <Text style={{color: colors.PRIMARY}}>ContactScreen</Text>
    </TouchableNativeFeedback>
  );
};
