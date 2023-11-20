/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {StyleSheet, Text, View, Platform} from 'react-native';
import RootNavigation from './src/navigation';

import { check, PERMISSIONS, request } from 'react-native-permissions';
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

const App = () => {
  useEffect(()=> {
    requestLocationPermission();
  }, [])
  return (
    
    <RootNavigation />
    
  )
};

const styles = StyleSheet.create({});

export default App;
