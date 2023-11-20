import React, {memo, useEffect, useState} from 'react';
import { 
    View, 
    Text, 
    Image, 
    StatusBar, 
    SafeAreaView, 
    ScrollView,
    ImageBackground
} from 'react-native';
import { Images, Colors, Strings, Constants } from '../../core';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/HomeHeader';
import Geolocation from '@react-native-community/geolocation';


const Home = memo(() => {
    const navigation = useNavigation();
    const [region, setRegion] = useState({});
    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition((res)=> {
            setRegion({
                latitude: res.coords.latitude,
                longitude: res.coords.longitude,
                
            })
        })
    };
    useEffect(()=> {
        getCurrentLocation();
    }, []);
    

  

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent 
                backgroundColor="transparent"
                //backgroundColor={Colors.backgroundColor}
                //barStyle={'dark-content'}
            />
            
            <ScrollView>
                <Header />
                <View>
                    <Image
                        resizeMode="contain"
                        style={[styles.imageBackground]}
                        source={Images.cloud}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.weathertext}>
                            Thời tiết
                        </Text>
                    </View>
                </View>

                <View>

                </View>
            </ScrollView>
        
        

      
      
        </SafeAreaView>
    );
});

export default Home;
