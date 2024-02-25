import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Importing icons from Expo

const { width, height } = Dimensions.get('window');

const FeedScreen = () => {
  const [filter, setFilter] = useState('nearby'); // Default filter is 'nearby'

  const nearbyPosts = [
    {
      id: '1',
      user: {
        name: 'John Doe',
        profilePic: require('/Users/judsondunne/ventr/ventr/assets/profiles/profile1.png'),
      },
      timestamp: '2 hours ago',
      location: 'New York, USA',
      likes: 123,
      comments: 45,
      image: require('/Users/judsondunne/ventr/ventr/assets/posts/photo1.png'),
    },
    {
        id: '2',
        user: {
          name: 'John Doe',
          profilePic: require('/Users/judsondunne/ventr/ventr/assets/profiles/profile1.png'),
        },
        timestamp: '2 hours ago',
        location: 'New York, USA',
        likes: 123,
        comments: 45,
        image: require('/Users/judsondunne/ventr/ventr/assets/posts/photo1.png'),
      },
    
    // Add more nearby posts as needed
  ];

  const friendPosts = [
    {
      id: '1',
      user: {
        name: 'Jane Smith',
        profilePic: require('/Users/judsondunne/ventr/ventr/assets/profiles/profile1.png'),
      },
      timestamp: '1 day ago',
      location: 'Los Angeles, USA',
      likes: 456,
      comments: 78,
      image: require('/Users/judsondunne/ventr/ventr/assets/posts/photo1.png'),
    },
    {
        id: '3',
        user: {
          name: 'Jane Smith',
          profilePic: require('/Users/judsondunne/ventr/ventr/assets/profiles/profile1.png'),
        },
        timestamp: '1 day ago',
        location: 'Los Angeles, USA',
        likes: 456,
        comments: 78,
        image: require('/Users/judsondunne/ventr/ventr/assets/posts/photo1.png'),
      },
    // Add more friend posts as needed
  ];

  const data = filter === 'nearby' ? nearbyPosts : friendPosts;

  const [likedPosts, setLikedPosts] = useState([]);

  const handleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  const handleDoubleTap = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterBar}>
        <TouchableOpacity onPress={() => setFilter('nearby')} style={[styles.filterButton, filter === 'nearby' && styles.selectedFilter]}>
          <Text style={[styles.filterText, filter === 'nearby' && styles.selectedFilterText]}>Nearby</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('friends')} style={[styles.filterButton, filter === 'friends' && styles.selectedFilter]}>
          <Text style={[styles.filterText, filter === 'friends' && styles.selectedFilterText]}>Friends</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Image source={item.image} style={styles.postImage} />
            <View style={styles.interactionIconsContainer}>
              <TouchableOpacity onPress={() => handleLike(item.id)} style={styles.iconButton}>
                <MaterialCommunityIcons name={likedPosts.includes(item.id) ? 'heart' : 'heart-outline'} size={30} color={likedPosts.includes(item.id) ? 'red' : 'white'} />
                <Text style={styles.interactionText}>{item.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <MaterialCommunityIcons name="comment-outline" size={30} color="white" />
                <Text style={styles.interactionText}>{item.comments}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <MaterialCommunityIcons name="share-outline" size={30} color="white" />
                <Text style={styles.interactionText}>Share</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.userInfoContainer}>
              <Image source={item.user.profilePic} style={styles.profilePic} />
              <View style={styles.userInfoTextContainer}>
                <Text style={styles.userName}>{item.user.name}</Text>
                <Text style={styles.timestamp}>{item.timestamp}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        pagingEnabled
        snapToInterval={height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative', // Ensure positioning context for absolute positioning
    },
    filterBar: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', // Positioning the filter bar absolutely
      top: 80, // Position the filter bar at the top
      left: 0,
      right: 0,
      zIndex: 1, // Ensure the filter bar is above other content
    },
    filterButton: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    filterText: {
      fontSize: 16,
      color: '#666666',
    },
    selectedFilter: {
      // backgroundColor: '#ffffff',
      // color: 'white',
    },
    selectedFilterText: {
      color: 'white',
    },
    postContainer: {
      width: width,
      height: height - 90,
      // marginBottom: 10,
      // marginTop: 40, // Adjust marginTop to accommodate the filter bar
    },
    postImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    userInfoContainer: {
      position: 'absolute',
      bottom: '10%',
      left: '5%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    profilePic: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    userName: {
      color: '#fff',
      fontWeight: 'bold',
    },
    location: {
      color: '#fff',
    },
    timestamp: {
      color: '#fff',
      fontSize: 12,
    },
    userInfoTextContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    interactionIconsContainer: {
      flexDirection: 'column',
      position: 'absolute',
      top: '50%',
      
      right: 10,
      transform: [{ translateY: -50 }],
      alignItems: 'center',
    },
    iconButton: {
      alignItems: 'center',
      paddingBottom: 15,
      marginBottom: 10,
    },
    interactionText: {
      color: 'white',
    },
  });
  
export default FeedScreen;
