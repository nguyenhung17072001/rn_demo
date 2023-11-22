import React, {memo, useEffect, useState} from 'react';
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
import {  List } from 'react-native-paper';

interface TextFieldProps {
    placeholder: String;
}
const TextField = memo((props: TextFieldProps) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);



    const yourData = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'B' },
        // Thêm các dữ liệu gợi ý khác vào đây
      ];
    
    const searchFilterFunction = (text) => {
        if (text) {
            const newData = yourData.filter((item) => {
            const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setSuggestions(newData);
        setQuery(text);
        } else {
            setSuggestions([]);
            setQuery(text);
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
                    value={query}
                    onChangeText={(text) => searchFilterFunction(text)}
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

export default TextField;
  