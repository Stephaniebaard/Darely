import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Game3Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Det här är Spel 1!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 }
});

export default Game3Screen;