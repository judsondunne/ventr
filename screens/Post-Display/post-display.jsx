import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, StyleSheet, Dimensions } from 'react-native';
import styles from './styles'; // Adjust the path as necessary

const activitiesData = [
  { id: '1', name: 'Hiking', image: require('/Users/judsondunne/ventr/ventr/assets/filterIcons/Hiking.png') },
  { id: '2', name: 'Camping', image: require('/Users/judsondunne/ventr/ventr/assets/filterIcons/Biking.png') },
  // Add more activities as needed
];

const commentsData = [
  { id: '1', text: 'Looks amazing!' },
  { id: '2', text: 'Wish I was there!' },
  // Add more comments as needed
];

const PostDisplay = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [commentsExpanded, setCommentsExpanded] = useState(false);

  const renderIcons = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.iconsScrollContainer}>
      {activitiesData.map((item) => (
        <TouchableOpacity key={item.id} style={styles.activityIconContainer}>
          <Image source={item.image} style={styles.iconImage} />
          <Text style={styles.iconText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderComments = () => (
    <View>
      <TouchableOpacity onPress={() => setCommentsExpanded(!commentsExpanded)}>
        <Text style={styles.viewAllCommentsText}>{commentsExpanded ? 'Hide Comments' : 'View All Comments'}</Text>
      </TouchableOpacity>
      {commentsExpanded && commentsData.map((comment) => (
        <Text key={comment.id} style={styles.commentText}>{comment.text}</Text>
      ))}
    </View>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <View>
              <Text style={styles.tabContent}>This is an awesome camping spot in Yosemite National Park!</Text>
              <View style={styles.activites}>
                
                <Text style={styles.activitiesHeader}>Activities</Text>
                {renderIcons()}
                {renderComments()}
              </View>
              <View style={styles.space}></View>
          </View>
        );
      case 'location':
        return <Text style={styles.tabContent}>Yosemite National Park, CA</Text>;
      case 'discover':
        return <Text style={styles.tabContent}>Discover more about this place...</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView 
      style={styles.scrollContainer}
      maintainVisibleContentPosition={{ minIndexForVisible: 0 }}
    >
        <View style={styles.imageContainer}>
          <Image source={{ uri: '/Users/judsondunne/ventr/ventr/assets/posts/photo1.png' }} style={styles.image} />
          <View style={styles.textOverlay}>
            <Text style={styles.overlayText}>Judson Dunne @JudsonDunne - Now</Text>
            <Text style={styles.overlayText}>Yosemite National Park, CA</Text>
          </View>
        </View>
        <View style={styles.tabs}>
          {['description', 'location', 'discover'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.tabPanel}>
          {renderTabContent()}
        </View>
      </ScrollView>
      <View style={styles.directionsContainer}>
  <Text style={styles.timeAwayText}>15 min away</Text>
  <TouchableOpacity style={styles.directionsButton}>
    <Text style={styles.directionsButtonText}>Directions</Text>
  </TouchableOpacity>
</View>

    </View>
  );
};

export default PostDisplay;
