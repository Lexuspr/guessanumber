import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import Header from './src/components/container/Header'
import StartGameScreen from './src/screens/StartGameScreen'
import GameScreen from './src/screens/GameScreen'
import GameOverScreen from './src/screens/GameOverScreen'

function FetchFonts() {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessAttempts, setGuessAttempts] = useState(0)
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading 
        startAsync={FetchFonts} 
        onFinish={() => setFontLoaded(true)}
        onError={err => console.log('Error loading fonts: ', err)}  
      />
    )
  }

  startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  gameOverHandler = attempts => {
    setGuessAttempts(attempts)
  }

  newGameHandler = () => {
    setGuessAttempts(0)
    setUserNumber(null)
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a Number"/>
      {
        userNumber ? 
          guessAttempts > 0 ? 
            <GameOverScreen 
              roundsNumber={guessAttempts} 
              userNumber={userNumber}
              onNewGame={newGameHandler}
            /> 
            :
            <GameScreen 
              userChoice={userNumber} 
              onGameOver={gameOverHandler}
            /> 
          : 
          <StartGameScreen onStartGame={startGameHandler}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
