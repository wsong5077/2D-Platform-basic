import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { id: Date.now(), text: inputText }]);
      setInputText('');
    }
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        style={{ marginBottom: 50 }}
      />
      <TextInput
        value={inputText}
        onChangeText={setInputText}
        placeholder="Type a message"
        style={styles.input}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  messageContainer: {
    padding: 10,
    backgroundColor: 'lightblue',
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
  },
});

export default ChatScreen;
