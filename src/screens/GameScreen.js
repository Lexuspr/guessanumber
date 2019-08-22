import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Alert, ScrollView, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import NumberContainer from '../components/presentational/NumberContainer'
import Card from '../components/presentational/Card'
import DefaultStyles from '../../constants/default-styles'
import MainButton from '../components/presentational/MainButton'

function GenerateRandomNumber(min, max, exclude) {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNumber = Math.floor(Math.random() * (max - min)) + min
    return rndNumber === exclude ? 
        GenerateRandomNumber(min, max, exclude) 
        : 
        rndNumber
}

function renderListItem({item, index}, length){
    return (
        <View style={styles.listItem}>
            <Text style={DefaultStyles.bodyText}>#{length - index}</Text>
            <Text style={DefaultStyles.bodyText}>{item}</Text>
        </View>
    )
}

function GameScreen({ userChoice, onGameOver }) {
    const initialGuess = GenerateRandomNumber(1, 100, userChoice)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [rounds, setRounds] = useState([initialGuess])

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
                currentLow.current = currentGuess + 1
                break
            default:
                return
        }
        const nextNumber = GenerateRandomNumber(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(currentRounds => [nextNumber, ...currentRounds])
    }

    return (
        <View style={styles.container}>
            <Text style={DefaultStyles.bodyText}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={() => nextGuessHandler('lower')}>
                    <Ionicons 
                        name='md-remove'
                        size={24}
                        color='white'
                    />
                </MainButton>
                <MainButton onPress={() => nextGuessHandler('greater')}>
                    <Ionicons 
                        name='md-add'
                        size={24}
                        color='white'
                    />
                </MainButton>
            </Card>
            <View style={styles.listContainer}>
                {/* <ScrollView contentContainerStyle={styles.list}>
                    {rounds.map((round, index) => renderListItem(round, rounds.length - index))}
                </ScrollView> */}
                <FlatList 
                    data={rounds} 
                    renderItem={(data) => renderListItem(data, rounds.length)}
                    keyExtractor={(item) => item.toString()}
                    contentContainerStyle={styles.list}
                />
            </View>
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
    },
    listItem: {
        borderColor: '#ccc',
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    listContainer: {
        width: '60%',
        flex: 1
    },
    list: {
        flexGrow: 1,
        //alignItems: 'center',
        justifyContent: 'flex-end'
    }
})

export default GameScreen