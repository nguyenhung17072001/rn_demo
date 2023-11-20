import React, {memo} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes, Constants, Colors, Fonts, Images} from '../core';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Home from '../screens/Home';

//tabbar


//router



const TabIcon = ({ focused, color, name }) => {
    return (
        <View style={[styles.backgroundIcon,
            focused && {backgroundColor: Colors.whiteBackground, minHeight: 44, minWidth: 44}
        ]}>
            <Ionicons size={focused?28:20} color={color} name={name} style={styles.tabIcon} />
        </View>
    );
}
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{
            
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarStyle: {
                height: Constants.height*0.065,

                backgroundColor: Colors.green,
                borderWidth: 0,
            },
            tabBarLabelStyle: {
                marginLeft: 100
            }
        }}
        >
            <Tab.Screen 
                name={"Home"} 
                component={Home} 
                options={{
                    tabBarIcon: ({ focused, color }) => <TabIcon focused={focused} color={focused? Colors.black:Colors.placeholderTextColor} name={"home"} />,
                    
                }}
            />
            <Tab.Screen
                name={"TrafficSign"} 
                component={View} 
                options={{
                    tabBarIcon: ({ focused, color }) => <View style={[styles.backgroundIcon,
                        focused && {backgroundColor: Colors.whiteBackground}
                    ]}>
                        <FontAwesome5 size={focused?28:22} color={focused? Colors.black:Colors.placeholderTextColor} name={"traffic-light"} style={styles.tabIcon} />
                    </View>
                    
                }}
            />
            
            
            <Tab.Screen 
                name={"Theory"} 
                component={View} 
                options={{
                    tabBarIcon: ({ focused, color }) => <TabIcon focused={focused} color={focused? Colors.black:Colors.placeholderTextColor} name={"book"} />,
                    
                }}
            />
            <Tab.Screen 
                name={"Practice"} 
                component={View} 
                options={{
                    tabBarIcon: ({ focused, color }) => <View style={[styles.backgroundIcon,
                        focused && {backgroundColor: Colors.whiteBackground}
                    ]}>
                        <Entypo size={focused?28:22} color={focused? Colors.black:Colors.placeholderTextColor} name={"classic-computer"} style={styles.tabIcon} />
                    </View>
                    
                }}
            />
            <Tab.Screen 
                name={"Menu"} 
                component={View} 
                options={{
                    tabBarIcon: ({ focused, color }) => <TabIcon focused={focused} color={focused? Colors.black:Colors.placeholderTextColor} name={"menu"} />,
                    
                }}
            />
        </Tab.Navigator>
    );
}

const HomeStack = createStackNavigator();
const HomeNavigation = memo(() => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name={'MyTabs'}
                component={MyTabs}
                options={{headerShown: false}}
            />
            
        
        </HomeStack.Navigator>
    );
});



const styles = StyleSheet.create({
    homeLogo: {
        height: Constants.width*0.095,
        width: Constants.width*0.095,
        backgroundColor: Colors.redText,
        borderRadius: 100,
    },
    tabIcon: {
        
        //backgroundColor: "red"
    },
    backgroundIcon: {
        backgroundColor: "#d0f0f0",
        borderRadius: 15,
        padding: Constants.width*0.012,
        minHeight: 40, 
        minWidth: 40,
        justifyContent: "center",
        alignItems: "center",
    }
})
export default HomeNavigation;
