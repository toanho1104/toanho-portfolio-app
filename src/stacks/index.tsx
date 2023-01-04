import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomStack} from './Bottomtab';

export default function Navigation() {
  return (
    <NavigationContainer>
      <BottomStack />
    </NavigationContainer>
  );
}
