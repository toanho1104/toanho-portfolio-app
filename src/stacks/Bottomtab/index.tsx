import {CustomTabBar} from '@components/bottomTabBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';

import {TBottomStackParamList} from '../../types/navigationType';
import {ContactScreen} from '../ContactStack/screens/ContactScreen';
import {SkillScreen} from '../SkillsStack/screens/SkillScreen';

const Tab = createBottomTabNavigator<TBottomStackParamList>();

export const BottomStack = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Skill" component={SkillScreen} />
    </Tab.Navigator>
  );
};
