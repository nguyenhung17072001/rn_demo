import React, {memo, useEffect, useRef} from 'react';
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

const Header = memo(() => {
    const navigation = useNavigation();
  
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                {/* <Icon name='' /> */}
            </TouchableOpacity>
            <Text style={styles.headerName}>
                Hà Nội
            </Text>
            <TouchableOpacity>
                <Icon name="add" size={24} color={Colors.blackText} />
            </TouchableOpacity>
        </View>
    );
});

export default Header;
  