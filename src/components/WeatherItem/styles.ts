import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts, Constants} from '../../core';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    
    weatherTodayContainer: {
        backgroundColor: Colors.grey,
        paddingVertical: Constants.width * 0.02,
        marginHorizontal: Constants.width * 0.02,
        paddingHorizontal: Constants.width * 0.04,
        borderRadius: 8,
        marginTop: Constants.width * 0.02,
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
