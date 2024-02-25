import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for modal
  },
  container: {
    backgroundColor: '#385757',
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 20,
    width: '80%', // Adjust modal width as needed
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#FFF',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#486D6E',
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 8,
    marginHorizontal: 5,
    marginTop: 5,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'medium',
    color: 'white',
    marginLeft: 4,
  },
  searchIcon: {
    marginRight: 10,
    color: 'white',
  },
  
  iconsContainer: {
    flexDirection: 'row',
  },
  circleImage1: {
    width: 50, // Adjust icon width as needed
    height: 50, // Adjust icon height as needed
    borderRadius: 50, // Make it circular
    marginHorizontal: 5, // Add horizontal margin between icons
  },
  iconHeader: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    marginTop: 8,
  }
});
