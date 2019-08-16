import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

import Colors from '../../constants/colors'
import Card from '../components/presentational/Card'
import Input from '../components/presentational/Input'

export default function StartGameScreen() {
    return (
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
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title='Reset' 
                            onPress={() => {}}
                            color={Colors.accent}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title='Confirm' 
                            onPress={() => {}}
                            color={Colors.primary}                        
                        />
                    </View>
                </View>
            </Card>
        </View>
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
        marginVertical: 10
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
})
