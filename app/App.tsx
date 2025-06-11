import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

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
    width: '80%',       // 80% av förälderns bredd (skärmen)
    height: '80%',      // 60% av förälderns höjd (skärmen)
    justifyContent: 'center',  
    alignItems: 'center', 
  },
  text: {
    color: 'rgba(213, 172, 253, 1)',
    fontSize: 20,
  },
});
