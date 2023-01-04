import React from 'react';
import {ContactScreen} from '../ContactStack/screens/ContactScreen';

import {SkillScreen} from '../SkillsStack/screens/SkillScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomTabBar} from '@components/bottomTabBar';
import {TBottomStackParamList} from '@types/stacksType';

const Tab = createBottomTabNavigator<TBottomStackParamList>();

export const BottomStack = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Skill" component={SkillScreen} />
    </Tab.Navigator>
  );
};
