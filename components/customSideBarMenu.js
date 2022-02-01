import React , {Component} from 'react-native'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import {DrawerItems} from 'react-native-drawer'
import firbase from 'firebase'

export default class CustomSideBarMenu extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    <View style={styles.drawerItemsContainer}></View>
                    <DrawerItems {...this.props}/>
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})