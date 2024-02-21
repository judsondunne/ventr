import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

const PostDisplay = () => {
    
  const [activeTab, setActiveTab] = useState('description');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return <Text style={styles.tabContent}>Found this awesome camping spot in Yosemite National Park!</Text>;
      case 'location':
        return <Text style={styles.tabContent}>23 mins away</Text>;
      case 'discover':
        return <Text style={styles.tabContent}>Discover more about this place...</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: '/Users/judsondunne/ventr/ventr/assets/posts/photo1.png' }} style={styles.image} />
        <View style={styles.textOverlay}>
          <View style={styles.text}>
            <Text style={{ color: '#ffffff' }}>Judson @judsonunne - Now</Text>
            <Text style={{ color: '#ffffff' }}>Yosemite National Park, CA</Text>
          </View>
        </View>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('description')}>
          <Text>Description</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('location')}>
          <Text>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('discover')}>
          <Text>Discover</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.tabPanel}>
        {renderTabContent()}
      </ScrollView>
      <TouchableOpacity style={styles.directionsButton}>
        <Text style={styles.directionsButtonText}>Directions</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostDisplay;
