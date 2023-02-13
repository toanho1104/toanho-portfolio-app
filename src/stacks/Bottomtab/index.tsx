import {
  TBottomTabNavigatorParamList,
  TStackItem,
} from '@hooks/useAppNavigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';

import {AboutMeScreen} from '@stacks/AboutMeStack/screens/AboutMeScreen';
import {ContactScreen} from '@stacks/ContactStack/screens/ContactScreen';
import {SkillScreen} from '@stacks/SkillsStack/screens/SkillScreen';

import {CustomTabBar} from '@components/bottomTabBar';

const BottomTab = createBottomTabNavigator<TBottomTabNavigatorParamList>();

export const BottomStack = () => {
  return (
    <BottomTab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      {SCREENS_DATA.map(item => (
        <BottomTab.Screen
          key={item.key}
          name={item.name}
          component={item.component}
        />
      ))}
    </BottomTab.Navigator>
  );
};

const SCREENS_DATA: TStackItem[] = [
  {
    key: 0,
    name: 'AboutMe',
    component: AboutMeScreen,
  },
  {
    key: 1,
    name: 'Contact',
    component: ContactScreen,
  },
  {
    key: 2,
    name: 'Skill',
    component: SkillScreen,
  },
];
