import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Header({title}){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
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
        backgroundColor: '#f7287b',
    },
    title: {
        color: 'black',
        fontSize: 18
    }
}) 

export default Header
