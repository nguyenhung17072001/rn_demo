import React, {memo, useEffect, useState} from 'react';
import { 
    View, 
    Text, 
    Image, 
    StatusBar, 
    TextInput, 
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Images, Colors, Strings, Constants } from '../../core';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { addCityStart } from '../../flow/reducers/city';
import { searchCityByName } from '../../flow/util/services';


interface TextFieldProps {
    placeholder: String;
    addCity: ({}) => void;
}
const TextField = memo((props: TextFieldProps) => {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [data, setData] = useState([
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'B' },
        // Thêm các dữ liệu gợi ý khác vào đây
    ]);

    useEffect(()=> {
        searchCityByName({
            q: value
        })
        .then((res)=> {
            console.log("========: ", res.data)
        })
        .catch((err)=> {
            console.log("err========: ", err)
        })
        
    }, [value]);

    const onChangeText = (text) => {
        if (text) {
            const newData = data.filter((item) => {
            const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setSuggestions(newData);
        setValue(text);
        } else {
            setSuggestions([]);
            setValue(text);
        }
    };
    
    return (
        <View>
            <View style={styles.textField}>
                <Icon name="search" size={20} color={Colors.placeholderTextColor}/>
                <TextInput 
                    style={styles.textInput}
                    placeholderTextColor={Colors.placeholderTextColor}
                    placeholder={props.placeholder}
                    value={value}
                    onChangeText={(text) => onChangeText(text)}
                />
            </View>
            
            <View style={styles.suggestionContainer}>
            {suggestions.map((item, index) => (
                <TouchableOpacity style={styles.suggestionItem} key={index}>
                    <Text style={styles.suggestionText}>
                        {item.name}
                    </Text>
                    <View style={styles.line} />
                </TouchableOpacity>
                
            ))}
            </View>
            
        </View>
    );
});

const mapStateToProps = (state: any) => {
    return {
        
    }
}

const mapStateToDispatch = (dispatch: (action: any)=> void) => {
    return {
        addCity: (data)=> {
            dispatch(addCityStart(data))
        }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(TextField);
  