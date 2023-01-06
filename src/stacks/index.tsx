import {useTheme} from '@hooks/useTheme';
import {NavigationContainer} from '@react-navigation/native';

// import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {BottomStack} from './BottomTab';

export default function Navigation() {
  const {ThemeContextProvider} = useTheme();

  return (
    <NavigationContainer>
      <ThemeContextProvider>
        {/* <SafeAreaView> </SafeAreaView> */}
        <BottomStack />
      </ThemeContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'red',
  },
});
