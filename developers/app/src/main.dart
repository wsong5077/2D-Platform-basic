import 'package:flutter/material.dart';
import 'home_page.dart'; // Import the HomePage widget
import 'chat_interface.dart'; // Import the ChatInterface widget

void main() {
  runApp(ArtChatApp());
}

class ArtChatApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Art Chat',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: HomePage(), // Set the home page as the initial route
      routes: {
        '/chat': (context) => ChatInterface(), // Define the route for the Chat Interface
      },
    );
  }
}
