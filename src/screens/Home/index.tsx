import React, {memo, useEffect, useRef} from 'react';
import {View, Text, Image, StatusBar, SafeAreaView} from 'react-native';
import {Images, Colors, Strings, Constants} from '../../core';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


const Home = memo(() => {
  const navigation = useNavigation();
  

  

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
            backgroundColor={Colors.backgroundColor}
            barStyle={'dark-content'}
        />
        
        

      
      
    </SafeAreaView>
  );
});

export default Home;
