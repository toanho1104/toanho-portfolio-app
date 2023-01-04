import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomStack} from './Bottomtab';
import {useTheme} from '@hooks/useTheme';
// import {ThemeContextProvider} from '@contexts/themeContext';

export default function Navigation() {
  const {ThemeContextProvider} = useTheme();

  return (
    <NavigationContainer>
      <ThemeContextProvider>
        <BottomStack />
      </ThemeContextProvider>
    </NavigationContainer>
  );
}
