import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts, Constants} from '../../core';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    textField: {
        //backgroundColor: Colors.backgroundColor,
        //backgroundColor: 'red',
        flexDirection: 'row',
        marginHorizontal: Constants.width * 0.04,
        paddingHorizontal: Constants.width * 0.02,
        borderRadius: 8,
        paddingVertical: Constants.width * 0.008,
        alignItems: "center",
        borderWidth: 0.4,
        borderColor: Colors.placeholderTextColor,
    },
    textInput: {
        paddingRight: Constants.width * 0.04,
        color: Colors.blackText,
        fontFamily: Fonts.semiBold,
        flex: 1,

    },
    suggestionContainer: {
        backgroundColor: Colors.white,
        marginHorizontal: Constants.width*0.04,
        borderRadius: 8,
        
    },
    suggestionText: {
        color: Colors.grey
    },
    suggestionItem: {
        paddingHorizontal: Constants.width*0.04,
        paddingTop: Constants.width*0.02,
    },
    line: {
        height: 1,
        width: 400,
        color: Colors.redText
    }
    

  
});

export default styles;
