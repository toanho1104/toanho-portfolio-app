import {CustomTabBar} from '@components/bottomTabBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AboutMeScreen} from '@stacks/AboutMeStack/screens/AboutMeScreen';
import {ContactScreen} from '@stacks/ContactStack/screens/ContactScreen';
import {SkillScreen} from '@stacks/SkillsStack/screens/SkillScreen';

import React from 'react';

import {TBottomStackParamList} from '../../types/navigationType';

const Tab = createBottomTabNavigator<TBottomStackParamList>();

export const BottomStack = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      {SCREENS_DATA.map(item => (
        <Tab.Screen
          key={item.key}
          name={item.name as keyof TBottomStackParamList}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  );
};

const SCREENS_DATA = [
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
