import React, {memo, useEffect, useState} from 'react';
import { 
    View, 
    Text, 
    Image, 
    StatusBar, 
    SafeAreaView, 
    TouchableOpacity
} from 'react-native';
import { Images, Colors, Strings, Constants } from '../../core';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

interface WeatherItemProps {
    item: any;
}
const WeatherItem = memo((props: WeatherItemProps) => {
    const navigation = useNavigation();
    
    const [status, setStatus] = useState<Object>({});
    
    useEffect(()=> {
        switch (props?.item?.weather[0]?.icon) {
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
    }, []);
    return (
        <TouchableOpacity style={styles.weatherTodayContainer}>
            <View style={styles.locationContainer}>
                <Icon name='location' size={22} color= {Colors.white} />
                <Text style={styles.locationText}>
                    {props.item?.name ? props.item?.name : ''}
                </Text>
                
            </View>
            
            <View style={styles.row}>
                <View style={styles.row}>
                    <Icon name={status.icon} color={status.color} size={44}/>
                    <Text style={styles.tempText}>
                        {Math.round(props.item.main.temp-273.15)} °C
                    </Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.descriptionText}>
                        {status.description}
                    </Text>
                    <Text style={styles.descriptionText}>
                        Độ ẩm {props.item.main.humidity}%
                    </Text>
                    <Text style={styles.descriptionText}>
                        Sức gió {props.item.wind.speed}m/s
                    </Text>
                </View>
            </View>
        
        </TouchableOpacity>
    );
});

export default WeatherItem;
  