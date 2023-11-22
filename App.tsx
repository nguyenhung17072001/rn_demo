/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {StyleSheet, Text, View, Platform} from 'react-native';
import RootNavigation from './src/navigation';
import { Provider } from 'react-redux';
import { check, PERMISSIONS, request } from 'react-native-permissions';
import makeStore from './src/flow/store';
import { PaperProvider } from 'react-native-paper';

const requestLocationPermission = async () => {
  try {
    const permission = Platform.select({
      ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    });

    const permissionStatus = await check(permission);

    if (permissionStatus !== 'granted') {
      const requestStatus = await request(permission);
      return requestStatus === 'granted';
    } else {
      return true;
    }
  } catch (error) {
    console.error('Error requesting location permission: ', error);
    return false;
  }
};


const {store, persistor} = makeStore({});
const App = () => {
  useEffect(()=> {
    requestLocationPermission();
  }, [])
  return (
    <Provider store={store}>
      <PaperProvider>
        <RootNavigation />
      </PaperProvider>
      
    </Provider>
    
  )
};

const styles = StyleSheet.create({});

export default App;
