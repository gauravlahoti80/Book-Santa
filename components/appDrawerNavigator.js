import React , {Component} from 'react-native'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import {DrawerItems} from 'react-native-drawer'
import firbase from 'firebase'
import CustomSideBarMenu from '../components/customSideBarMenu'
import {AppTabNavigator} from 'react-native-drawer'

export const AppDrawerNavigator = createAppDrawerNavigator({
    Home : {
        screen : AppTabNavigator
    },
},
    {
        contentComponent : CustomSideBarMenu
    },
    {
        initialRouteName : 'Home'
    },
})