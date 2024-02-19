import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the Icon component correctly
import styles from './styles';

const data = [
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
        // Add other attributes as needed
        image: require('/Users/judsondunne/ventr/ventr/assets/posts/photo1.png'), 
    },
    {
        id: '2',
        user: {
            name: 'Jane Smith',
            profilePic: require('/Users/judsondunne/ventr/ventr/assets/profiles/profile1.png'), 
        },
        timestamp: '1 day ago',
        location: 'Los Angeles, USA',
        likes: 456,
        comments: 78,
        // Add other attributes as needed
        image: require('/Users/judsondunne/ventr/ventr/assets/posts/photo1.png'),  // Example path, replace with actual path
    },
    // Add more hardcoded posts as needed
];

const PostItem = ({ post }) => (
    <View style={styles.postContainer}>
        {/* Post image */}
        <Image source={post.image} style={styles.postImage} />

        {/* Heart Icon on Image */}
        <View style={styles.heartIconContainer}>
            <Icon name="heart" size={30} color="#FFFFFF" />
        </View>

        {/* User info */}
        <View style={styles.userInfoContainer}>
            <Image source={post.user.profilePic} style={styles.profilePic} />
            <View>
                <Text style={styles.userName}>{post.user.name}</Text>
                <Text style={styles.location}>{post.location}</Text>
            </View>
        </View>

        {/* Timestamp */}
        <View style={styles.timestampContainer}>
            <Text style={styles.timestamp}>{post.timestamp}</Text>
        </View>

        {/* Post details (likes, comments, share button) */}
        <View style={styles.postDetails}>
            <Text style={styles.likesCommentsText}>Likes: {post.likes}</Text>
            <Text style={styles.likesCommentsText}>Comments: {post.comments}</Text>
            <TouchableOpacity style={styles.shareButton}>
                <Icon name="share" size={20} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    </View>
);

const FeedScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <PostItem post={item} />}
                keyExtractor={(item) => item.id}
                pagingEnabled
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default FeedScreen;
