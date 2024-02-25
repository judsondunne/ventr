import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#213032',
    paddingTop: 80,
  },
  messageItem: {
    marginLeft: 20,
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#374B4E',
    alignItems: 'center',
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  lastMessage: {
    color: 'white',
    fontSize: 14,
  },
  seen: {
    color: '#999',
     // a grey color for seen messages
  },
  unseen: {
    fontWeight: 'bold'
    //color: '#000', // a darker color for unseen messages
  },
  time: {
    fontSize: 14,
    color: '#999',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10, // Adjust margin for spacing between icon and text
  },
  header: {
    flexDirection: 'column', // Change to column layout
    marginBottom: 20,
  },
  headerItem: {
    marginLeft: 20,
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Align items vertically
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4F5C5D',
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  searchIcon: {
    marginRight: 10,
    color: 'white',
  }
});

export default styles;
