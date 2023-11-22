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
import { connect } from 'react-redux';
import { Images, Colors, Strings, Constants } from '../../core';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/HomeHeader';
import Geolocation from '@react-native-community/geolocation';
import moment from 'moment';

//action
import { addMainCityStart } from '../../flow/reducers/city';
import { TouchEventType } from 'react-native-gesture-handler/lib/typescript/TouchEventType';
import { TouchableOpacity } from 'react-native-gesture-handler';


moment.locale('vi');
interface HomeProps {
    addMainCity: ({})=> void;
    mainCity: Object;
}
const Home = memo((props: HomeProps) => {
    const navigation = useNavigation();
    const [region, setRegion] = useState<Object>({});
    const [status, setStatus] = useState<Object>({});


    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition((res)=> {
            setRegion({
                lat: res.coords.latitude,
                lon: res.coords.longitude,
                
            });
            //console.log("region: ", )
            if(region) {
                props.addMainCity({
                    lat: res.coords.latitude,
                    lon: res.coords.longitude,
                });
            }
            
        })
    };
    useEffect(()=> {
        getCurrentLocation();
        
    }, []);
    //console.log("zzzzz: ", props.mainCity)
    
    useEffect(()=> {
        
        switch (props?.mainCity?.weather[0]?.icon) {
            case '01d' || '01n':
                setStatus({
                    icon: 'sunny',
                    color: Colors.yellow,
                    description: 'Bầu trời quang đãng'
                })
                break;
            case '02d' || '02n':
                setStatus({
                    icon: 'cloud-circle',
                    color: Colors.yellow,
                    description: 'Ít mây phân tán'
                })
                break;
            case '03d' || '03n':
                setStatus({
                    icon: 'cloud-outline',
                    color: Colors.borderColor,
                    description: 'Có mây rải rác'
                })
                break;
            case '04d' || '04n':
                setStatus({
                    icon: 'cloud-outline',
                    color: Colors.borderColor,
                    description: 'Nhiều mây'
                })
                break;
            case '09d' || '09n':
                setStatus({
                    icon: 'rainy-outline',
                    color: Colors.borderColor,
                    description: 'Mưa nhỏ'
                })
                break;
            case '10d' || '10n':
                setStatus({
                    icon: 'rainy',
                    color: Colors.borderColor,
                    description: 'Mưa'
                })
                break;
            case '13d' || '13n':
                setStatus({
                    icon: 'thunderstorm',
                    color: Colors.borderColor,
                    description: 'Mưa có sấm sét'
                })
                break;
            
            default:
                setStatus({
                    icon: 'sunny',
                    color: Colors.yellow,
                    description: 'Không xác định'
                })
                break;
        }
    }, [region]);
    
  

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent 
                backgroundColor="transparent"
                //backgroundColor={Colors.backgroundColor}
                //barStyle={'dark-content'}
            />
            
            <ScrollView>
                <Header headerName={props.mainCity?.address?.road ? props.mainCity?.address?.road : props.mainCity?.address?.suburb} />
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

                <View style={styles.weatherTodayContainer}>
                    <View style={styles.locationContainer}>
                        <Icon name='location' size={22} color= {Colors.white} />
                        <Text style={styles.locationText}>
                            {props.mainCity?.address?.road ? props.mainCity?.address?.road : props.mainCity?.address?.suburb}
                        </Text>
                        <TouchableOpacity onPress={getCurrentLocation}>
                            <Icon name='refresh' size={17} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.timeText}>
                            {moment(new Date()).format('llll')}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.row}>
                            <Icon name={status.icon} color={status.color} size={44}/>
                            <Text style={styles.tempText}>
                                {Math.round(props.mainCity?.main?.temp-273.15)} °C
                            </Text>
                        </View>
                        <View style={styles.detailContainer}>
                            <Text style={styles.descriptionText}>
                                {status?.description}
                            </Text>
                            <Text style={styles.descriptionText}>
                                Độ ẩm {props.mainCity?.main.humidity}%
                            </Text>
                            <Text style={styles.descriptionText}>
                                Sức gió {props.mainCity?.wind.speed}m/s
                            </Text>
                        </View>
                    </View>
                    
                </View>
            </ScrollView>
        
        

      
      
        </SafeAreaView>
    );
});


const mapStateToProps = (state: any) => {
    return {
        mainCity: state?.city?.mainCity
    }
}

const mapStateToDispatch = (dispatch: (action: any)=> void) => {
    return {
        addMainCity: (data: {})=> {
            dispatch(addMainCityStart(data));
        }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Home);
