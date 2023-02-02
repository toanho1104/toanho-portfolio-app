import {useTheme} from '@hooks/useTheme';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';

import {BottomStack} from './BottomTab';
import {IntroduceStack} from './IntroduceStack';

const Stack = createStackNavigator();

export default function Navigation() {
  const {ThemeContextProvider} = useTheme();

  return (
    <NavigationContainer>
      <ThemeContextProvider>
        <Stack.Navigator
          initialRouteName="IntroduceStack"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="IntroduceStack" component={IntroduceStack} />
          <Stack.Screen name="BottomStack" component={BottomStack} />
        </Stack.Navigator>

        {/* <BottomStack /> */}
      </ThemeContextProvider>
    </NavigationContainer>
  );
}
