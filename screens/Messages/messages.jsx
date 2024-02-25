import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Assuming you're using Expo for icons
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const messages = [
  {
    id: 1,
    name: 'JMAR',
    photoUrl: '/Users/judsondunne/ventr/ventr/assets/profiles/profile1.png',
    lastMessage: 'No 😄',
    time: '20m ago',
    seen: false,
  },
  {
    id: 2,
    name: 'Judson Dunne',
    photoUrl: '/Users/judsondunne/ventr/ventr/assets/profiles/profile2.png',
    lastMessage: 'Seen',
    time: '27m ago',
    seen: true,
  },
  {
    id: 3,
    name: 'Lisa',
    photoUrl: '/Users/judsondunne/ventr/ventr/assets/profiles/profile3.png',
    lastMessage: 'Maybe...',
    time: '29m ago',
    seen: false,
  },
  {
    id: 4,
    name: 'Ben',
    photoUrl: '/Users/judsondunne/ventr/ventr/assets/profiles/profile4.png',
    lastMessage: 'Seen 6h ago',
    time: '6h ago',
    seen: true,
  },
  {
    id: 5,
    name: 'Kevin',
    photoUrl: '/Users/judsondunne/ventr/ventr/assets/profiles/profile5.png',
    lastMessage: 'ok!',
    time: '7h ago',
    seen: false,
  },
  {
    id: 6,
    name: 'Josh',
    photoUrl: '/Users/judsondunne/ventr/ventr/assets/profiles/profile6.png',
    lastMessage: 'Yay!!',
    time: '9h ago',
    seen: true,
  },
  {
    id: 7,
    name: 'Jack',
    photoUrl: '/Users/judsondunne/ventr/ventr/assets/profiles/profile7.png',
    lastMessage: 'Stop dude',
    time: '9h ago',
    seen: false,
  },
  {
    id: 8,
    name: 'Sadie',
    photoUrl: '/Users/judsondunne/ventr/ventr/assets/profiles/profile8.png',
    lastMessage: 'ur stupid',
    time: '10h ago',
    seen: true,
  },
  // ... more messages
];

const MessagesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerItem}>
          <TouchableOpacity><Icon name="angle-left" size={34} color="black" style={styles.searchIcon} onPress={() => navigation.goBack()}/></TouchableOpacity>
          <Text style={styles.title}>Messages</Text>
        </View>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#999"
          />
        </View>
      </View>
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
