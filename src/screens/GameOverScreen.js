import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

function GameOverScreen({ roundsNumber, userNumber, onNewGame }) {
    return (
        <View style={styles.container}>
            <Text>The Game is Over!</Text>
            <Text>Number of rounds: {roundsNumber}</Text>
            <Text>Number was: {userNumber}</Text>
            <Button
                title='New Game'
                onPress={onNewGame}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameOverScreen