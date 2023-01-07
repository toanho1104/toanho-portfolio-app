import {useTheme} from '@hooks/useTheme';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {BottomStack} from './BottomTab';
import {IntroduceStack} from './Introduce';

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

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'red',
  },
});
