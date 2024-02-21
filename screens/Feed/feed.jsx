import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

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
        image: require('/Users/judsondunne/ventr/ventr/assets/posts/photo1.png'),
    },
    {
        id: '3',
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
        id: '4',
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
];

const PostItem = ({ post }) => (
    <View style={styles.postContainer}>
        <Image source={post.image} style={styles.postImage} />
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

const FeedScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <PostItem post={item} />}
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
    },
    postContainer: {
        width: width,
        height: height,
    },
    postImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    heartIconContainer: {
        position: 'absolute',
        top: '5%',
        right: '5%',
    },
    userInfoContainer: {
        position: 'absolute',
        bottom: '20%',
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
    timestampContainer: {
        marginLeft: 90,
        position: 'absolute',
        bottom: 0,
        left: '5%',
    },
    timestamp: {
        color: '#fff',
        fontSize: 12,
    },
    postDetails: {
        position: 'absolute',
        bottom: '5%',
        left: '5%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    likesCommentsText: {
        color: '#fff',
        marginRight: 15,
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

export default FeedScreen;
