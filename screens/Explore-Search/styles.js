import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        
    },
    
    searchContainer: {
        position: 'absolute',
        top: 80, // Adjust this value to match the photo
        width: '90%', // Adjust the width as per the design requirement
        flexDirection: 'row', // Align items horizontally
        justifyContent: 'space-between', // Space out the children evenly
        alignItems: 'center', // Align items vertically
        //backgroundColor: 'rgba(51, 51, 51, 0.8)', // Adjust the transparency as needed
        borderRadius: 15, // Adjust this to match the roundness in the photo
        paddingHorizontal: 10, // Adjust horizontal padding
        paddingVertical: 10, // Adjust vertical padding if necessary
         // Grey color
    },
    searchInput: {
        flex: 1, // Take up all available space except for the buttons
        height: 40, // Adjust height to match the photo
        fontSize: 18, // Adjust font size to match the photo
        color: '#FFF', // White text color
        //marginLeft: 10, // Margin to the left of the text
        fontWeight: 'normal', // Adjust font weight if necessary
        borderBottomWidth: 1.8, // Add a border at the bottom
        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    },
    iconButton: {
        // ... other styles remain unchanged
        padding: 10,
        //color: '156,142,153',
         // Adjust padding around the icon
    },
    searchIcon: {
        
        // ... other styles remain unchanged
        width: 30, // Adjust width to match the photo
        height: 30, // Adjust height to match the photo
        //color: '156,142,153', // White tint for the icon
    },
    closeIcon: {
        // ... other styles remain unchanged
        //color: '156,142,153', // White tint for the icon
    },
    searchResults: {
        marginTop: 150,
      }


});

export default styles;
