import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts, Constants} from '../../core';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.backgroundColor,
        flex: 1,

    },
    imageBackground: {
        
        width: Constants.width,
        height: Constants.height * 0.2,
        opacity: 0.35
    },
    textContainer: {
        position: 'absolute',
        top: 80,
        //bottom: 0,
        left: 0,
        right: 0,
    },
    weathertext: {
        color: Colors.blackText,
        fontSize: 28,
        fontFamily: Fonts.bold,
        textAlign: 'center',
        
    },
  
});

export default styles;
