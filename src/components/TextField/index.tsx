import React, {memo, useEffect, useRef} from 'react';
import { 
    View, 
    Text, 
    Image, 
    StatusBar, 
    TextInput, 
    TouchableOpacity
} from 'react-native';
import { Images, Colors, Strings, Constants } from '../../core';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


interface TextFieldProps {
    placeholder: String;
}
const TextField = memo((props: TextFieldProps) => {
  
    return (
        <View style={styles.textField}>
            <Icon name="search" size={20} color={Colors.placeholderTextColor}/>
            <TextInput 
                style={styles.textInput}
                placeholderTextColor={Colors.placeholderTextColor}
                placeholder={props.placeholder}
            />
        </View>
    );
});

export default TextField;
  