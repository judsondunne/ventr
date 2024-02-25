// styles.js
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    
  },
  scrollContainer: {
    flex: 1,
    
  },
  imageContainer: {
    width: width,
    height: height * 0.75,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textOverlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    padding: 10,
    borderRadius: 6,
  },
  overlayText: {
    color: '#ffffff',
    fontSize: 16,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#223133',
    
  },
  tab: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#CEA46F',
  },
  tabText: {
    fontSize: 15,
    color: '#B2B2B2',
  },
  activeTabText: {
    color: '#CEA46F',
  },
  tabContent: {
    padding: 20,
    fontSize: 16,
    marginLeft: 10,
    
    backgroundColor: '#223133',
    color: '#B2B2B2',
  },
  directionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
    backgroundColor: '#223032',
    height: 160 // Adjust the height as needed
  },
  
  timeAwayText: {
    color: '#B2B2B2',
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 24, // Adjust the font size as needed
  },
  
  directionsButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    
    backgroundColor: 'rgba(206, 164, 111,0.9)', // Slightly transparent or different color to distinguish
  },
  
  directionsButtonText: {
    color: '#223032',
    fontSize: 18, // Keep consistent with the timeAwayText size
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
  iconsScrollContainer: {
    paddingVertical: 10,
  },
  activityIconContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  iconImage: {
    width: 50,
    height: 50,
  },
  iconText: {
    color: '#ffffff',
  },
  viewAllCommentsText: {
    color: '#0000FF',
    textAlign: 'center',
    marginVertical: 10,
    
  },
  commentText: {
    color: '#ffffff',
    fontSize: 14,
    padding: 5,
    
  },
  activitiesHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#CEA46F',
    paddingVertical: 10,
    
   
  },
  tabPanel: {
    flex: 1,
    backgroundColor: '#223133',
  },
  activites: {
    marginLeft: 30,
  },
  space: {
    marginBottom: 200,
  }
  
});
