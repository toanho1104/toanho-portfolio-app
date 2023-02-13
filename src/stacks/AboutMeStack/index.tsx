import {TStackItem} from '@hooks/useAppNavigation';
import {useTheme} from '@hooks/useAppTheme';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';

import {AboutMeScreen1} from './screens/AboutMeScreen1';
import {AboutMeScreen2} from './screens/AboutMeScreen2';

const Stack = createStackNavigator();

export default function Navigation() {
  const {ThemeContextProvider} = useTheme();

  return (
    <NavigationContainer>
      <ThemeContextProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {STACK_DATA.map(item => (
            <Stack.Screen
              key={item.key}
              name={item.name}
              component={item.component}
            />
          ))}
        </Stack.Navigator>
      </ThemeContextProvider>
    </NavigationContainer>
  );
}

const STACK_DATA: TStackItem[] = [
  {key: 0, name: 'About1', component: AboutMeScreen1},
  {key: 1, name: 'About2', component: AboutMeScreen2},
];
