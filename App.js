import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './src/components/container/Header'
import StartGameScreen from './src/screens/StartGameScreen'
import GameScreen from './src/screens/GameScreen'
import GameOverScreen from './src/screens/GameOverScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessAttempts, setGuessAttempts] = useState(0)

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
