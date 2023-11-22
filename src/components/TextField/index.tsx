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
    const navigation = useNavigation();
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
    let timeout: NodeJS.Timeout;


    useEffect(()=> {
        const handleSearchCityByName = () => {
            searchCityByName({ q: value })
                .then((res)=> {
                    setData(res.data);
                })
                .catch((err)=> {
                    console.log("err========: ", err);
                });
        };
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(handleSearchCityByName, 200);

        return () => clearTimeout(timeout);
        
    }, [value]);

    
    
    return (
        <View>
            <View style={styles.textField}>
                <Icon name="search" size={20} color={Colors.placeholderTextColor}/>
                <TextInput 
                    style={styles.textInput}
                    placeholderTextColor={Colors.placeholderTextColor}
                    placeholder={props.placeholder}
                    value={value}
                    onChangeText={(text) => setValue(text)}
                />
            </View>
            
            <View style={styles.suggestionContainer}>
            {data.map((item, index) => {
                const handleAddCity =()=> {
                    props.addCity({
                        name: item.name,
                        lat: item.lat,
                        lon: item.lon,
                    });
                    navigation.goBack();
                }
                return(
                    <TouchableOpacity onPress={handleAddCity} style={styles.suggestionItem} key={index}>
                        <Text style={styles.suggestionText}>
                            {item.name}
                        </Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    
                )
            })}
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
  