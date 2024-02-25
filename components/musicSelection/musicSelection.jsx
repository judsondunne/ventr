import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  Modal, 
  FlatList, 
  TextInput 
} from 'react-native';
import { BlurView } from 'expo-blur';
import { AntDesign } from '@expo/vector-icons';

const songsData = [
  { id: '1', title: 'Respect', artist: 'N.W.A', posts: '200k posts', cover: require("../../assets/albumPhotos/2.png") },
  { id: '2', title: 'Love.', artist: 'Ye', posts: '839k posts', cover: require('../../assets/albumPhotos/2.png') },
  { id: '3', title: 'Respect', artist: 'N.W.A', posts: '200k posts', cover: require('../../assets/albumPhotos/nwa.png') },
  // Add other songs data
];

const MusicSelection = ({ visible, onSelect, onClose }) => {
  const [searchText, setSearchText] = useState('');

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.songItem} onPress={() => onSelect(item)}>
      <Image source={item.cover} style={styles.albumCover} />
      <View style={styles.songDetails}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>
        <Text style={styles.songPosts}>{item.posts}</Text>
      </View>
      <AntDesign name="playcircleo" size={24} color="black" style={styles.playIcon} />
    </TouchableOpacity>
  );

  return (
    <Modal visible={visible} transparent={true} animationType="slide" onRequestClose={onClose}>
      <BlurView style={styles.fullScreen} intensity={100} tint="light">
        <View style={styles.container}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <TextInput
            style={styles.searchBar}
            placeholder="Search music"
            placeholderTextColor="#8e8e93"
            onChangeText={setSearchText}
            value={searchText}
          />
          <Text style={styles.sectionTitle}>Recommended</Text>
          <FlatList
            data={songsData.filter(song => song.title.toLowerCase().includes(searchText.toLowerCase()))}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContentContainer}
          />
          <TouchableOpacity style={styles.recordButton}>
            <Text style={styles.recordButtonText}>Record original sound</Text>
          </TouchableOpacity>
        </View>
      </BlurView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  listContentContainer: {
    paddingHorizontal: 10,
  },
  songItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    alignItems: 'center',
  },
  albumCover: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  songDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  songTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  songArtist: {
    fontSize: 14,
    color: '#646464',
  },
  songPosts: {
    fontSize: 12,
    color: '#646464',
  },
  playIcon: {
    paddingRight: 20,
  },
  searchBar: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderColor: '#e4e4e7',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f7f7f7',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  recordButton: {
    backgroundColor: '#007aff',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  recordButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 999,
  },
});

export default MusicSelection;
