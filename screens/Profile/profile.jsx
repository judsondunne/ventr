// /screens/Explore/Explore.jsx
import React from 'react';
import { View, TouchableOpacity, Image, ScrollView, Text } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const posts = [
    { id: '1', likes: '20k', image: '/Users/judsondunne/ventr/ventr/assets/posts/photo1.png' }, // Replace with your actual image paths and like counts
    { id: '2', likes: '120', image: '/Users/judsondunne/ventr/ventr/assets/posts/photo2.png' },
    { id: '3', likes: '12k', image: '/Users/judsondunne/ventr/ventr/assets/posts/photo2.png' },
    { id: '4', likes: '20k', image: '/Users/judsondunne/ventr/ventr/assets/posts/photo1.png' },
    { id: '5', likes: '120', image: '/Users/judsondunne/ventr/ventr/assets/posts/photo2.png' },
    { id: '6', likes: '12k', image: '/Users/judsondunne/ventr/ventr/assets/posts/photo1.png' },
];

const renderPost = (post) => (
    <TouchableOpacity key={post.id} style={styles.postContainer}>
        <Image source={{ uri: post.image }} style={styles.postImage} />
        <Text style={styles.postLikes}>{post.likes}</Text>
    </TouchableOpacity>
);

const Stat = ({ number, label }) => (
    <View style={styles.statContainer}>
        <Text style={styles.statNumber}>{number}</Text>
        <Text style={styles.statLabel}>{label}</Text>
    </View>
);

// const navigation = useNavigation(); // Initialize navigation
    

//     const handleMessagePress = () => {
//         navigation.navigate('Messages'); // Navigate to ExploreSearch screen
//     };

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    source={{ uri: '/Users/judsondunne/ventr/ventr/assets/profiles/profile1.png' }} // Replace with your profile picture URL
                    style={styles.profilePic}
                />
                <TouchableOpacity style={styles.shareButton}>
                        <Icon name="share" size={20} color="#FFFFFF" />
                    </TouchableOpacity>
                <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>Badge LV3</Text>
                </View>
                <Text style={styles.userName}>Judson Dunne</Text>
                <Text style={styles.userHandle}>@judsondunne</Text>
                <View style={styles.statsContainer}>
                    <Stat number="146" label="Following" />
                    <Stat number="12k" label="Followers" />
                    <Stat number="50" label="Posts" />
                </View>
                
                <View style={styles.localGuideContainer}>
                    <Text style={styles.localGuideText}>Local Guide</Text>
                    <View style={styles.progressBackground}>
                        <View style={[styles.progressBar, { width: `${(68 / 100) * 100}%` }]} />
                    </View>
                    <Text style={styles.progressText}>68 / 100</Text>
                </View>

            </View>
            <View style={styles.postGrid}>
            {posts.map(renderPost)}
            </View>
        </ScrollView>
    );
};

export default ProfileScreen;
