import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223032',
  },
  header: {
    marginTop: 80,
    fontSize: 34,
    fontWeight: 'bold',
    marginLeft: 30,
    color: 'white',
  },
  challengesScrollView: {
    paddingVertical: 20,
  },
  challengeCard: {
    width: 300, // Set a fixed width for the card
    borderRadius: 15,
    marginLeft: 30,
    overflow: 'hidden',
    marginRight: 10, // Add space between cards
    position: 'relative', // Necessary for absolute positioning
  },
  challengeImage: {
    width: '100%',
    height: 650, // Adjust height of the image container
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    marginBottom: 15,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 500,
    marginLeft: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 15,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  challengeDescription: {
    fontSize: 14,
    color: '#ddd',
    marginBottom: 5,
  },
  startButton: {
    backgroundColor: '#CEA46F', // Gold color for the start button
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    width: 220,
    alignSelf: 'center', // Center the button horizontally
    marginBottom: 18,
  },
  startButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  // Add additional styles for other UI components as needed
});
