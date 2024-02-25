import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // Import PROVIDER_GOOGLE
import { darkMapStyle } from '/Users/judsondunne/ventr/ventr/screens/Explore/darkModeStyles.js'; // Import dark map style

const songs = [
  { id: '1', title: 'redrum • 21 Savage' },
  { id: '2', title: 'The otter • camp' },
  { id: '3', title: 'MY EYES • Travis Scott' },
];

const UploadScreen = ({ navigation, route }) => {
  const { image, location } = route.params;
  const [caption, setCaption] = useState('');
  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSaveDraft = () => {
    // Implement draft saving logic
  };

  const handleShare = () => {
    // Implement share logic
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="white" onPress={handleBackPress} />
        <Text style={styles.headerTitle}>New Post</Text>
      </View>

      <TextInput
        style={styles.captionInput}
        placeholder="Write a caption..."
        placeholderTextColor="#979999"
        value={caption}
        onChangeText={setCaption}
      />

      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.imagePreview} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {songs.map((song) => (
          <View key={song.id} style={styles.songContainer}>
            <Text style={styles.songTitle}>{song.title}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.topicsContainer}>
        {/* Implement topics selection UI */}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.draftButton} onPress={handleSaveDraft}>
          <Text style={styles.buttonText}>Save Draft</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
      </View>

      {location && (
        <View style={styles.mapContainer}>
          <MapView
            style={styles.mapPreview}
            provider={PROVIDER_GOOGLE} // Add provider prop
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            customMapStyle={darkMapStyle} // Apply custom map style
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#213032',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 80,
      marginLeft: 10,
      paddingBottom: 30,
      paddingHorizontal: 15,
      borderBottomColor: '#333',
      borderBottomWidth: 1,
    },
    headerTitle: {
      textAlign: 'center',
      flex: 1,
      fontWeight: 'bold',
      color: '#fff',
    },
    captionInput: {
      marginHorizontal: 15,
      marginVertical: 10,
      borderWidth: 0,
      borderRadius: 5,
      padding: 10,
      color: '#979999',
      fontSize: 16,
    },
    imageContainer: {
      marginHorizontal: 15,
      aspectRatio: 1.45,
      marginBottom: 10,
    },
    imagePreview: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'contain',
      borderRadius: 10, // Add this borderRadius style
    },
    songContainer: {
      marginHorizontal: 5,
      backgroundColor: '#262626',
      borderRadius: 20,
      paddingVertical: 5,
      paddingHorizontal: 15,
      alignSelf: 'center',
    },
    songTitle: {
      color: '#fff',
      fontSize: 14,
    },
    topicsContainer: {},
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
    draftButton: {
      backgroundColor: '#445355',
      borderRadius: 20,
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    shareButton: {
      backgroundColor: '#339DFF',
      borderRadius: 20,
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    buttonText: {
      color: '#fff',
    },
    mapContainer: {
      alignItems: 'center',
    },
    mapPreview: {
      width: '80%',
      height: 150,
      marginTop: 10,
      marginBottom: 40,
      borderRadius: 11,
    },
  });
  

export default UploadScreen;
