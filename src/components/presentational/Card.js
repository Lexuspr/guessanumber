import React from 'react'

import { View, StyleSheet } from 'react-native'

export default function Card({ children, style }) {
    return (
        <View style={{...styles.container, ...style}}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 8,
        padding: 20,
        borderRadius: 10
    }
})
