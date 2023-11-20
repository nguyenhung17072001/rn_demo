import React, {memo} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '../core';
import {navigationRef} from './navigationRef';
import {NavigationContainer} from '@react-navigation/native';

//Screen
import Splash from '../screens/Splash';

//navigation
import HomeNavigation from './HomeNavigation';

const Stack = createStackNavigator();
const RootNavigation = memo(() => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.Splash}
          component={Splash}
          options={{headerShown: false}}
        />
        
        <Stack.Screen
          name={'HomeNavigation'}
          component={HomeNavigation} //HomeNavigation
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default RootNavigation;
