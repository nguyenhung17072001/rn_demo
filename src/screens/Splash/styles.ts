import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from '../../core';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: width,
    width: width ,
    marginTop: -height * 0.16,
    marginBottom: height * 0.02,
  },
  appNameText: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: 28,
    marginVertical: height*0.1,
  },
  sloganText: {
    color: Colors.grey,
    fontSize: 11,
    fontFamily: Fonts.regular,
  },
});

export default styles;
