// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#213032', // The background color of the screen
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profilePic: {
        
        width: 100,
        height: 100,
        borderRadius: 50, // Makes it round
        marginTop: 70,
    },
    // Add these styles to your styles.js
badgeContainer: {
    position: 'absolute',
    top: 150, // Adjust this value as needed to position the badge over the profile picture
    alignSelf: 'center', // Centers the badge horizontally
    backgroundColor: '#4F6D7A', // The background color of the badge
    borderRadius: 20, // Adjust for rounded corners
    paddingVertical: 5, // Padding inside the badge
    paddingHorizontal: 20, // Padding inside the badge
    borderWidth: 1, // Width of the border around the badge
    borderColor: '#CEA46F', // Color of the border
    shadowColor: '#000', // Color of the shadow
    shadowOffset: { width: 0, height: 2 }, // The size of the shadow
    shadowOpacity: 0.25, // Opacity of the shadow
    shadowRadius: 3.84, // Blur radius of the shadow
    elevation: 5, // Elevation for Android (adds drop shadow)
  },
  
  badgeText: {
    color: '#CEA46F', // Color of the text inside the badge
    fontWeight: 'bold', // Make the text bold
    textAlign: 'center', // Center the text inside the badge
  },
  
    userName: {
        paddingTop: 30,
        color: '#CEA46F',
        
        fontSize: 24,
    },
    userHandle: {
        paddingTop: 10,
        color: '#CEA46F',
        fontSize: 16,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 30,
    },
    statContainer: {
        alignItems: 'center',
        flex: 1,
    },
    statNumber: {
        color: '#fff',
        fontSize: 22, // Larger font size for the number
        fontWeight: 'bold', // Optional: if you want the number to be bold
    },
    statLabel: {
        color: '#fff',
        fontSize: 12, // Smaller font size for the label
    },
        // Add these styles to your styles.js
    localGuideContainer: {
        width: '90%', // Width of the progress bar container
        alignSelf: 'center', // Center the container
        marginTop: 10,
        alignItems: 'center', // Center items vertically
    },

    localGuideText: {
        color: '#fff',
        marginTop: 10,
        marginBottom: 5,
        fontSize: 20,
        fontWeight: 'bold',
    },

    progressBackground: {
        width: '75%', // Full width of the container
        height: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden', // Ensures the inner bar does not spill outside the border radius
    },

    progressBar: {
        height: '100%',
        backgroundColor: '#CEA46F', // Gold color
        borderRadius: 10, // Rounded corners
    },

    progressText: {
        position: 'absolute', // Overlay the text on the progress bar
        top: 55,
        marginTop: 15,
        right: 20,
        
        alignSelf: 'center', // Center the text horizontally
        color: '#fff',
        fontWeight: 'bold', // Optional: if you want the text to be bold
    },

    postGrid: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 3, // Add some padding if needed
        marginBottom: 10, // Space at the bottom of the grid
    },
    postContainer: {
        position: 'relative', // Allows absolute positioning for likes
        width: '32%', // Slightly less than one-third of the container width
        aspectRatio: 0.5, // Makes height twice the width
        marginBottom: 3, // Space between rows
    },
    postImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10, // Round the corners if you like
    },
    postLikes: {
        position: 'absolute',
        bottom: 5, // Adjust as necessary
        left: 5, // Adjust as necessary
        color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5,
        fontSize: 12,
        overflow: 'hidden', // Ensures the background doesn't exceed the border radius
    },
});