import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './source/HomeScreen';
import Game1Screen from './source/WouldYouRather'; console.log('Game1Screen från import:', Game1Screen);
import Game2Screen from './source/TruthOrDare';
import Game3Screen from './source/NeverHaveIEver';
import Game4Screen from './source/Paranoia';

export type RootStackParamList = {
  Home: undefined;
  Game1: undefined;
  Game2: undefined;
  Game3: undefined;
  Game4: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game1" component={Game1Screen} />
        <Stack.Screen name="Game2" component={Game2Screen} />
        <Stack.Screen name="Game3" component={Game3Screen} />
        <Stack.Screen name="Game4" component={Game4Screen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
