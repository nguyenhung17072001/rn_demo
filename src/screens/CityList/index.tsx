import React, {memo, useEffect, useState} from 'react';
import { 
    View, 
    Text, 
    Image, 
    StatusBar, 
    SafeAreaView, 
    ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Images, Colors, Strings, Constants } from '../../core';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/HomeHeader';
import Geolocation from '@react-native-community/geolocation';
import moment from 'moment';
import WeatherItem from '../../components/WeatherItem';

//action



moment.locale('vi');
interface CityListProps {
    addMainCity: ({})=> void;
    mainCity: Object;
    cityList: any;
}
const CityList = memo((props: CityListProps) => {
    const navigation = useNavigation();
    //console.log("ss: ", props.cityList)

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent 
                backgroundColor="transparent"
                //backgroundColor={Colors.backgroundColor}
                //barStyle={'dark-content'}
            />
            <Header
                headerName='Các địa điểm khác'
                action={true}
            />
            <FlatList
                data={props.cityList}
                renderItem={({item})=><WeatherItem item={item} key={item} />}
                keyExtractor={item => item.lat}
            />

        </SafeAreaView>
    );
});


const mapStateToProps = (state: any) => {
    return {
        mainCity: state?.city?.mainCity,
        cityList: state?.city?.cityList,
    }
}

const mapStateToDispatch = (dispatch: (action: any)=> void) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(CityList);
