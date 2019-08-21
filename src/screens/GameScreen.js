import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import NumberContainer from '../components/presentational/NumberContainer'
import Card from '../components/presentational/Card'
import DefaultStyles from '../../constants/default-styles'

function GenerateRandomNumber(min, max, exclude) {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNumber = Math.floor(Math.random() * (max - min)) + min
    return rndNumber === exclude ? 
        GenerateRandomNumber(min, max, exclude) 
        : 
        rndNumber
}

function GameScreen({ userChoice, onGameOver }) {
    const [currentGuess, setCurrentGuess] = useState(GenerateRandomNumber(1, 100, userChoice))
    const [rounds, setRounds] = useState(0)

    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds)
        } 
    }, [currentGuess, userChoice, onGameOver])

    nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice)) {
            Alert.alert('Invalid hint!', 'Choose an appropiate hint', [{text: 'Sorry!', style: 'cancel'}])
            return
        }

        switch (direction) {
            case 'lower':
                currentHigh.current = currentGuess
                break
            case 'greater':
                currentLow.current = currentGuess
                break
            default:
                return
        }
        const nextNumber = GenerateRandomNumber(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(currentRounds => currentRounds + 1)
    }

    return (
        <View style={styles.container}>
            <Text style={DefaultStyles.bodyText}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={() => nextGuessHandler('lower')}/>
                <Button title="GREATER" onPress={() => nextGuessHandler('greater')}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default GameScreen