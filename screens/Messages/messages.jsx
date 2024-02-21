import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';



const messages = [
  {
    id: 1,
    name: 'Lisa',
    photoUrl: 'https://via.placeholder.com/60',
    lastMessage: 'No 😄',
    time: '20m ago',
    seen: false,
  },
  {
    id: 2,
    name: 'Judson Dunne',
    photoUrl: 'https://via.placeholder.com/60',
    lastMessage: 'Seen 3h ago',
    time: '3h ago',
    seen: true,
  },
  // ... more messages
];

const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.messageItem}>
            <Image source={{ uri: item.photoUrl }} style={styles.photo} />
            <View style={styles.messageContent}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={[styles.lastMessage, item.seen ? styles.seen : styles.unseen]}>{item.lastMessage}</Text>
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MessagesScreen;

