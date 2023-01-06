import {useTheme} from '@hooks/useTheme';
import Animated from 'react-native-reanimated';

import React, {useCallback, useMemo} from 'react';

import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

interface IProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({children}: IProps) => {
  const {colors, themeMode} = useTheme();

  const checkBarStyle = useMemo(() => {
    return themeMode === 'dark' ? 'light-content' : 'dark-content';
  }, [themeMode]);
  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        {backgroundColor: colors.BACKGROUND_PRIMARY},
      ])}>
      <StatusBar
        backgroundColor={colors.BACKGROUND_PRIMARY}
        barStyle={checkBarStyle}
      />

      <SafeAreaView />
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});