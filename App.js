import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/container/Header';
import StartGameScreen from './src/screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a Number"/>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
