import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts, Constants} from '../../core';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    header: {
        //backgroundColor: Colors.backgroundColor,
        //backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 35,
        paddingVertical: Constants.height * 0.012,
        paddingHorizontal: Constants.width * 0.04
    },
    headerName: {
        color: Colors.blackText,
        fontFamily: Fonts.bold,
        fontSize: 15,
    }

  
});

export default styles;
