import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../../constants/colors'
import DefaultStyles from '../../../constants/default-styles'

function Header({title}){
    return (
        <View style={styles.container}>
            <Text style={DefaultStyles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
    }
}) 

export default Header
