import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Importing images
const profilePic = require('../../assets/posts/photo2.png');


const PostCard = ({ post }) => (
    <View style={styles.postContainer}>
        <Image source={profilePic} style={styles.postImage} />
        <View style={styles.heartIconContainer}>
            <Icon name="heart" size={30} color="#FFFFFF" />
        </View>
        <View style={styles.userInfoContainer}>
            <Image source={post.user.profilePic} style={styles.profilePic} />
            <View style={styles.userInfoTextContainer}>
                <View style={styles.topInfo}>
                    <Text style={styles.userName}>{post.user.name}</Text>
                    <View style={styles.timestampContainer}>
                        <Text style={styles.timestamp}>{post.timestamp}</Text>
                    </View>
                </View>
                <Text style={styles.location}>{post.location}</Text>
            </View>
        </View>
        <View style={styles.postDetails}>
            <Text style={styles.likesCommentsText}>Likes: {post.likes}</Text>
            <Text style={styles.likesCommentsText}>Comments: {post.comments}</Text>
            <TouchableOpacity style={styles.shareButton}>
                <Icon name="share" size={20} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    postContainer: {
        flex: 1,
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    postImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    heartIconContainer: {
        position: 'absolute',
        top: '5%', // Adjust as needed
        right: '5%',
    },
    userInfoContainer: {
        position: 'absolute',
        bottom: '20%', // Adjust as needed
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
        marginLeft: 20,
    },
    timestampContainer: {
        position: 'absolute',
        bottom: '15%', // Adjust as needed
        left: '5%',
    },
    timestamp: {
        color: '#fff',
        fontSize: 12,
    },
    postDetails: {
        position: 'absolute',
        bottom: '5%', // Adjust as needed
        left: '5%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    likesCommentsText: {
        color: '#fff',
        marginRight: 15, // Adjust as needed
    },
    shareButton: {
        // Additional styling for share button if needed
    },
    userInfoTextContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    topInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default PostCard;
