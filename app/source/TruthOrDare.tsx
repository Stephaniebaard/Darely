import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Game2Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Det här är Spel 1!</Text>
      {/* Här lägger du till din spelkomponent */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 }
});

export default Game2Screen;