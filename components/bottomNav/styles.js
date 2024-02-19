import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    flexDirection: 'row',
    height: 108, // Increased height for the shadow effect
    elevation: 5, // Add elevation for Android shadow
    backgroundColor: '#223133',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: -3 }, // Specify the position of the shadow
    shadowOpacity: 0.1, // Set the opacity of the shadow
    shadowRadius: 3, // Set the blur radius of the shadow
    // Removed marginBottom and marginTop if you want to lift the bar up
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    // Adjust padding to vertically center the icons if needed
    paddingVertical: 10,
  },
  // ... rest of your styles ...
});

export default styles;
