// filename: complex_code.js

/* 
   Complex JavaScript Code
   This code demonstrates a complex implementation of a web-based chat application.
   It includes multiple classes, functions, and APIs for various features like user registration,
   chat rooms, message sending, user permissions, and more.
   Note: This code is a simplified version for demonstration purposes and may not be production-ready.
*/

// User class representing a registered user
class User {
  constructor(id, username, email) {
    this.id = id;
    this.username = username;
    this.email = email;
  }

  getInfo() {
    return `User ID: ${this.id}, Username: ${this.username}, Email: ${this.email}`;
  }
}

// ChatRoom class representing a chat room
class ChatRoom {
  constructor(name) {
    this.name = name;
    this.users = [];
    this.messages = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  removeUser(user) {
    this.users = this.users.filter((u) => u.id !== user.id);
  }

  sendMessage(user, message) {
    const timestamp = new Date().toLocaleString();
    const formattedMessage = `${user.username} @ ${timestamp}: ${message}`;
    this.messages.push(formattedMessage);
    this.broadcastMessage(formattedMessage);
  }

  broadcastMessage(message) {
    // Code to broadcast the message to all connected users in the chat room
    console.log(`Broadcasting message: ${message}`);
  }
}

// ChatApp class representing the chat application
class ChatApp {
  constructor() {
    this.chatRooms = [];
  }

  createChatRoom(name) {
    const chatRoom = new ChatRoom(name);
    this.chatRooms.push(chatRoom);
    return chatRoom;
  }

  joinChatRoom(user, chatRoom) {
    if (!chatRoom.users.some((u) => u.id === user.id)) {
      chatRoom.addUser(user);
    }
  }

  leaveChatRoom(user, chatRoom) {
    chatRoom.removeUser(user);
  }
}

// Example code usage

// Create a chat application instance
const chatApp = new ChatApp();

// Create chat rooms
const generalChatRoom = chatApp.createChatRoom('General');
const codingChatRoom = chatApp.createChatRoom('Coding');

// Create users
const user1 = new User(1, 'JohnDoe', 'john.doe@example.com');
const user2 = new User(2, 'JaneSmith', 'jane.smith@example.com');

// Users join chat rooms
chatApp.joinChatRoom(user1, generalChatRoom);
chatApp.joinChatRoom(user2, generalChatRoom);
chatApp.joinChatRoom(user2, codingChatRoom);

// Send messages
generalChatRoom.sendMessage(user1, 'Hello world!');
generalChatRoom.sendMessage(user2, 'Hi there!');

codingChatRoom.sendMessage(user2, 'Has anyone worked with JavaScript before?');

// Print all chat rooms and their users
console.log('Chat Rooms:');
chatApp.chatRooms.forEach((chatRoom) =>
  console.log(
    ` - ${chatRoom.name}: Users: ${chatRoom.users.map((user) => user.username).join(', ')}`
  )
);

// Print all messages in a specific chat room
console.log(`\n${generalChatRoom.name} messages:`);
generalChatRoom.messages.forEach((message) => console.log(` - ${message}`));

// Print user information
console.log('\nUser Information:');
console.log(user1.getInfo());
console.log(user2.getInfo());