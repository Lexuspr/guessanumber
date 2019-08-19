import React, { useState } from 'react'
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import Colors from '../../constants/colors'
import Card from '../components/presentational/Card'
import Input from '../components/presentational/Input'
import NumberContainer from '../components/presentational/NumberContainer';

export default function StartGameScreen({ onStartGame }) {

    const [inputValue, setInputValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    InputEnterHandler = inputText => {
        setInputValue(inputText.replace(/[^0-9]/g, ''))
    }

    resetInputHandler = () => {
        setInputValue('')
        setConfirmed(false)
    }

    confirmInputHandler = () => {
        const numericValue = parseInt(inputValue)
        if (isNaN(numericValue) || numericValue <= 0 || numericValue > 99) {
            Alert.alert('Invalid number!', 'Number has to be between 1 and 99', [{text: 'Okay', style:'destructive', onPress: resetInputHandler}])
            return
        }
        setConfirmed(true)
        setInputValue('')
        setSelectedNumber(numericValue)
        Keyboard.dismiss()
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input 
                        style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={InputEnterHandler}
                        value={inputValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button 
                                title='Reset' 
                                onPress={resetInputHandler}
                                color={Colors.accent}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button 
                                title='Confirm' 
                                onPress={confirmInputHandler}
                                color={Colors.primary}                        
                            />
                        </View>
                    </View>
                </Card>
                {confirmed ? (
                    <Card style={styles.summaryContainer}>
                        <Text>You selected</Text>
                        <NumberContainer>
                            {selectedNumber}
                        </NumberContainer>
                        <Button 
                            title='START GAME'
                            onPress={() => onStartGame(selectedNumber)}
                        />
                    </Card>
                )
                :
                null
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
})
