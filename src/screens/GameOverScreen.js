import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import DefaultStyles from '../../constants/default-styles'
import Colors from '../../constants/colors'
import successImg from '../../assets/img/success.png'

function GameOverScreen({ roundsNumber, userNumber, onNewGame }) {
    return (
        <View style={styles.container}>
            <Text style={DefaultStyles.title}>The Game is Over!</Text>
            <View style={styles.imageContainer}>
                <Image 
                    source={successImg}
                    style={styles.image}
                />  
            </View>
            <View style={styles.resultContainer}>
                <Text style={DefaultStyles.title}>Your phone needed <Text style={styles.highligh}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highligh}>{userNumber}</Text></Text>
            </View>
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
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    highligh: {
        color: Colors.primary
    },
    resultContainer: {
        marginHorizontal: 20
    }
})

export default GameOverScreen