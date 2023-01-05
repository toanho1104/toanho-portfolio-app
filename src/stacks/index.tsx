import {useTheme} from '@hooks/useTheme';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';

import {BottomStack} from './BottomTab';

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
