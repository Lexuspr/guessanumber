import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

function GenerateRandomNumber(min, max, exclude) {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNumber = Math.floor(Math.random() * (max - min)) + min
    return rndNumber === exclude ? 
        GenerateRandomNumber(min, max, exclude) 
        : 
        rndNumber
}

function GameScreen({ userChoice }) {
    const [currentGuess, setCurrentGuess] = useState(GenerateRandomNumber(1, 100, userChoice))
    return (
        <View style={styles.container}>
            <Text>GameScreen!!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default GameScreen