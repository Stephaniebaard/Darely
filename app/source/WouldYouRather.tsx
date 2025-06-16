import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Game1Screen = () => {
  console.log('Game1Screen visas');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Det här är Spel 1!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Game1Screen;
