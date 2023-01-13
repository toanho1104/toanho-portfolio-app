import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';

import {IntroduceScreen} from './screens/IntroduceScreen';

const Stack = createStackNavigator();

export const IntroduceStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Introduce" component={IntroduceScreen} />
    </Stack.Navigator>
  );
};
