import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Paranoia = () => {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const fetchParanoia = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.truthordarebot.xyz/v1/paranoia');
      const data = await response.json();
      setQuestion(data.question); 
    } catch (error) {
      setQuestion('Somethings wrong, try again!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/confetti.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.card}>
        <TouchableOpacity style={styles.button} onPress={fetchParanoia}>
          <Text style={styles.buttonText}>Get new question?</Text>
        </TouchableOpacity>

        {loading ? (
          <ActivityIndicator size="large" color="#D5ACFD" style={{ marginTop: 20 }} />
        ) : (
          question.length > 0 && (
            <Text style={styles.questionText}>{question}</Text>
          )
        )}

        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back</Text>
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
  questionText: {
    color: 'rgb(50, 35, 71)',
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  backButton: {
    marginTop: 16,
    backgroundColor: 'rgba(70, 50, 100, 1)',
  },
});

export default Paranoia;
