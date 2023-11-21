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
    weatherTodayContainer: {
        backgroundColor: Colors.grey,
        paddingVertical: Constants.width * 0.02,
        marginHorizontal: Constants.width * 0.02,
        paddingHorizontal: Constants.width * 0.04,
        borderRadius: 8,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: "center",
        
        
    },
    locationText: {
        color: Colors.white,
        fontFamily: Fonts.semiBold,
        fontSize: 16,
        paddingHorizontal: Constants.width * 0.01,
    },
    timeText: {
        color: Colors.borderColor,
        fontFamily: Fonts.semiBold,
        fontSize: 12,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tempText: {
        color: Colors.white,
        fontFamily: Fonts.semiBold,
        fontSize: 18,
        paddingHorizontal: Constants.width * 0.03,
    },
    detailContainer: {
        flex: 1,
        //backgroundColor: "red",
        alignItems: 'flex-end'
    },
    descriptionText: {
        color: Colors.white,
        fontFamily: Fonts.semiBold,
        fontSize: 13,
        paddingHorizontal: Constants.width * 0.02,
    }
  
});

export default styles;
