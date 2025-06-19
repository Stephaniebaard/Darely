import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ImageBackground
      source={require('../assets/confetti.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.card}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Game1')}>
          <Text style={styles.buttonText}>Would You Rather</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}   onPress={() => {
    console.log('Tryckte på: Truth or Dare');
    navigation.navigate('Game2');
  }}>
          <Text style={styles.buttonText}>Truth or Dare</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Game3')}>
          <Text style={styles.buttonText}>Never Have I Ever</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Game4')}>
          <Text style={styles.buttonText}>Paranoia</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(134, 97, 172, 1)',
    borderColor: 'rgba(94, 65, 123, 1)',
    borderWidth: 6,
    borderRadius: 20,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(94, 65, 123, 1)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'rgba(213, 172, 253, 1)',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
