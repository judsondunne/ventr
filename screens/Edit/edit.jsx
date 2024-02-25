import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, FlatList, ImageBackground, TextInput } from 'react-native';
import { BlurView } from 'expo-blur';
import { AntDesign } from '@expo/vector-icons';
import MusicSelection
from '../../components/musicSelection/musicSelection';


const songsData = [
  { id: '1', title: 'Respect', artist: 'N.W.A', posts: '200k posts', cover: "../../assets/albumPhotos/2.png" },
  { id: '2', title: 'Love.', artist: 'Ye', posts: '839k posts', cover: '/Users/judsondunne/ventr/ventr/assets/albumPhotos/2.png' },
  { id: '3', title: 'Respect', artist: 'N.W.A', posts: '200k posts', cover: '/Users/judsondunne/ventr/ventr/assets/albumPhotos/nwa.png' },
  { id: '4', title: 'Love.', artist: 'Ye', posts: '839k posts', cover: '/Users/judsondunne/ventr/ventr/assets/albumPhotos/2.png' },
  { id: '5', title: 'Respect', artist: 'N.W.A', posts: '200k posts', cover: '/Users/judsondunne/ventr/ventr/assets/albumPhotos/nwa.png' },
  { id: '6', title: 'Love.', artist: 'Ye', posts: '839k posts', cover: '/Users/judsondunne/ventr/ventr/assets/albumPhotos/2.png' },
  { id: '7', title: 'Respect', artist: 'N.W.A', posts: '200k posts', cover: '/Users/judsondunne/ventr/ventr/assets/albumPhotos/nwa.png' },
  { id: '8', title: 'Love.', artist: 'Ye', posts: '839k posts', cover: '/Users/judsondunne/ventr/ventr/assets/albumPhotos/2.png' },
  // ... add the rest of the songs with their cover image URLs
];



const EditScreen = ({ route, navigation }) => {
  const { image } = route.params;
  const [musicModalVisible, setMusicModalVisible] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSongSelect = (song) => {
    setSelectedSong(song);
    setMusicModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SetLocation', { image: image })}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      
      <Image source={{ uri: image }} style={styles.image} />
      
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => setMusicModalVisible(true)}>
          <AntDesign name="sound" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <AntDesign name="at" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <MusicSelection
        visible={musicModalVisible}
        onSelect={handleSongSelect}
        onClose={() => setMusicModalVisible(false)}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop: 20,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1
    },
    button: {
      borderRadius: 10,
      backgroundColor: "#444343",
      paddingHorizontal: 10,
      marginVertical: 50,
      paddingVertical: 5,
    },
    buttonText: {
      fontSize: 16,
      color: 'white',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
    },
    iconsContainer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'flex-end',
      top: 0,
      bottom: 0,
      right: 0,
      paddingRight: 20,
    },
    iconButton: {
      marginVertical: 10,
    },
    musicSelectionContainer: {
      padding: 20,
      marginTop: 90,
    },
    songItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
      height: 70, // Set a fixed height for each item
    },
    songCover: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 10,
      overflow: 'hidden', // This will make the borderRadius effective for the image
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    songInfo: {
      justifyContent: 'center',
      marginLeft: 10,
    },
    songTitle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
    },
    songArtist: {
      color: 'lightgray',
      fontSize: 16,
    },
    songPosts: {
      color: 'white',
      fontSize: 14,
    },
    searchBar: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      marginBottom: 10,
    },
    recommendedText: {
      color: 'white',
      fontSize: 18,
      marginBottom: 10,
    },
    recordButton: {
      backgroundColor: '#1E90FF',
      borderRadius: 10,
      padding: 15,
      alignItems: 'center',
      position: 'absolute',
      bottom: 10,
      left: 20,
      right: 20,
    },
    recordButtonText: {
      color: 'white',
      fontSize: 16,
    },
  });
  

  
export default EditScreen;
