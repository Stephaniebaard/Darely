import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './source/HomeScreen';
import Game1Screen from './source/WouldYouRather';
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

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <ImageBackground
         source={require('./assets/confetti.png')} 
      style={styles.background}
      resizeMode="cover" 
    >
    <View style={styles.purpleBox}>
      <Text style={styles.text}>Open up !</Text>
      <StatusBar style="auto" />
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Would you rather" component={Game1Screen} />
        <Stack.Screen name="Truth or dare" component={Game2Screen} />
        <Stack.Screen name="Never have I ever" component={Game3Screen} />
        <Stack.Screen name="Paranoia" component={Game4Screen} />
      </Stack.Navigator>
      </NavigationContainer>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,            
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: 'rgba(134, 97, 172, 1)', 
    padding: 20,
    borderRadius:10,
    borderWidth: 10,                            
    borderColor: 'rgba(94, 65, 123, 1)', 
    width: '80%',      
    height: '80%',      
    justifyContent: 'center',  
    alignItems: 'center', 
  },
  text: {
    color: 'rgba(213, 172, 253, 1)',
    fontSize: 20,
  },
});
