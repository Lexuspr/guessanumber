import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'
import DefaultStyles from '../../constants/default-styles'
import Colors from '../../constants/colors'
import successImg from '../../assets/img/success.png'
import MainButton from '../components/presentational/MainButton';

function GameOverScreen({ roundsNumber, userNumber, onNewGame }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={DefaultStyles.title}>The Game is Over!</Text>
                <View style={styles.imageContainer}>
                    <Image 
                        source={successImg}
                        style={styles.image}
                    />  
                </View>
                <View style={styles.resultContainer}>
                    <Text style={{...DefaultStyles.title, ...styles.resultText}}>Your phone needed <Text style={styles.highligh}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highligh}>{userNumber}</Text></Text>
                </View>
                <MainButton onPress={onNewGame}>
                    New Game
                </MainButton>
            </View>
        </ScrollView>
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
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    highligh: {
        color: Colors.primary
    },
    resultContainer: {
        marginHorizontal: 20,
        
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    }
})

export default GameOverScreen