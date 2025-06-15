import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Välj ett spel:</Text>
      <Button title="Would you rather" onPress={() => navigation.navigate('Game1')} />
      <Button title="Truth or dare" onPress={() => navigation.navigate('Game2')} />
      <Button title="Never have I ever" onPress={() => navigation.navigate('Game3')} />
      <Button title="Paranoia" onPress={() => navigation.navigate('Game4')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 }
});

export default HomeScreen;
