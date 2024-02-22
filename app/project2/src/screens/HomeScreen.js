import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      
      {/* Artwork Image */}
      <Image
        source={require('../assets/Art1.jpg')}
        style={styles.artwork}
      />

      {/* Stylized Component Example */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Welcome to the App!</Text>
      </View>

      <Button
        title="Go to Scan"
        onPress={() => navigation.navigate('Scan')}
        style={styles.button}
      />
      <Button
        title="Go to Chat"
        onPress={() => navigation.navigate('Chat')}
        style={styles.button}
      />
    </View>
  );
}

// Add some basic styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // You can change this to your preferred background color
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  artwork: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  cardText: {
    fontSize: 18,
    color: '#333',
  },
  button: {
    marginBottom: 10,
    padding: 10,
  },
});

export default HomeScreen;
