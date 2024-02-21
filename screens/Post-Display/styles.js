import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '90%', // set the height according to your layout
    position: 'relative', // added
  },
  text: {
    color: '#ffffff', // change text color to white
  },
  image: {
    width: '100%',
    height: 600, // changed from '90%' to '100%'
  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
     // semi-transparent white background
    padding: 10,
    marginBottom: 30,
  },
  tabs: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  tab: {
    padding: 10,
  },
  tabContent: {
    padding: 10,
  },
  tabPanel: {
    flex: 1,
  },
  directionsButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  directionsButtonText: {
    color: '#fff',
  },
});
