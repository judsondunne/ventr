import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './styles.js';

// Initialize example challenge data
const challengesData = [
  {
    id: 1,
    title: "Not SNOW fast",
    description: "Find 5 new skiing spots",
    imageUri: '/Users/judsondunne/ventr/ventr/assets/posts/photo3.png'
  },

  {
    id: 2,
    title: "I've BEAN busy",
    description: "Find 10 cool coffee cafes",
    imageUri: '/Users/judsondunne/ventr/ventr/assets/posts/photo4.png'
  },
  // Add more challenge objects as needed
];

const ChallengesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Challenges</Text>
      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.challengesScrollView}
      >
        {/* Map over challenge data to generate cards */}
        {challengesData.map(challenge => (
          <View key={challenge.id} style={styles.challengeCard}>
            <Image 
              source={{ uri: challenge.imageUri }} 
              style={styles.challengeImage}
            />
            <View style={styles.overlay}>
              <View style={styles.profileContainer}>
                <Image 
                  source={require('/Users/judsondunne/ventr/ventr/assets/profiles/profile2.png')} // Specify the path to your profile image
                  style={styles.profileImage}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.challengeTitle}>{challenge.title}</Text>
                  <Text style={styles.challengeDescription}>{challenge.description}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.startButton}>
                <Text style={styles.startButtonText}>Start</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* Add the rest of your UI components here */}
    </View>
  );
};

export default ChallengesScreen;

