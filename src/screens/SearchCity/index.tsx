import React, {memo, useEffect, useState} from 'react';
import { 
    View, 
    Text, 
    Image, 
    StatusBar, 
    SafeAreaView, 
    ScrollView,
    ImageBackground,
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
import TextField from '../../components/TextField';

//action



moment.locale('vi');
interface CityListProps {
    cityList: any;
}
const SearchCity = memo((props: CityListProps) => {
    const navigation = useNavigation();
    //console.log("====: ", props.cityList)
    
    
  

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent 
                backgroundColor="transparent"
                //backgroundColor={Colors.backgroundColor}
                //barStyle={'dark-content'}
            />
            <ScrollView>
                <Header
                    headerName='Các địa điểm khác'
                    backAction={true}
                />
                <TextField 
                    placeholder="Nhập tên thành phố"
                />  
            </ScrollView>
        </SafeAreaView>
    );
});


const mapStateToProps = (state: any) => {
    return {
        cityList: state.city.cityList,
    }
}

const mapStateToDispatch = (dispatch: (action: any)=> void) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(SearchCity);
