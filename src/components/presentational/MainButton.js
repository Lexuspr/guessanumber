import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../../../constants/colors'

function MainButton({ children, containerStyle, textStyle, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{...styles.container, ...containerStyle}}>
                <Text style={{...styles.text, ...textStyle}}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        backgroundColor: Colors.primary,
        borderRadius: 15
    },
    text: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
})

export default MainButton