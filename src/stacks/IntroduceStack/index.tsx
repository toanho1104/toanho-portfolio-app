import {createStackNavigator} from '@react-navigation/stack';
import {TIntroduceStackParamList} from 'src/types/introduceType';

import React from 'react';

import {IntroduceScreen} from './screens/IntroduceScreen';

const Stack = createStackNavigator<TIntroduceStackParamList>();

export const IntroduceStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="IntroduceScreen" component={IntroduceScreen} />
    </Stack.Navigator>
  );
};
