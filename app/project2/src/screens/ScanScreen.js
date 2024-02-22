import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

function ScanScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: 'center', padding: 20 }}>Scan Artwork</Text>
      <RNCamera
        style={{ flex: 1 }}
        // Add camera configuration options here
      /> 
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ padding: 20, backgroundColor: 'lightgray', margin: 20 }}
      >
        <Text style={{ textAlign: 'center' }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ScanScreen;
