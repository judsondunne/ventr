import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    postContainer: {
        flex: 1,
        position: 'relative',
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
    // Add other styles as needed
});

export default styles;
