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
        top: 100,
        width: '90%', // Adjust the width as per the design requirement
        flexDirection: 'row', // Align items horizontally
        justifyContent: 'center', // Center the items
        alignItems: 'center', // Align items vertically
        backgroundColor: '#333', // This is the dark background color for the search container
        borderRadius: 20, // Rounded corners for the search container
        paddingHorizontal: 15, // Horizontal padding
    },
    searchInput: {
        flex: 1, // Take up all available space except for the buttons
        height: 50, // Increased height for the input
        fontSize: 16, // Font size for the input text
        color: '#FFF', // White text color
        marginRight: 10, // Margin between the input and the search icon
    },
    iconButton: {
        justifyContent: 'center', // Center the icon vertically and horizontally
        alignItems: 'center',
        padding: 8, // Padding around the icon to increase the touchable area
    },
    searchIcon: {
        paddingRight: 30,
        width: 24, // Example size for the search icon
        height: 24, // Example size for the search icon
        tintColor: '#FFF', // White tint for the icon
    },
    closeIcon: {
        width: 13, // Example size for the close icon
        height: 13,
         // Example size for the close icon
         // White tint for the icon
    },
});

export default styles;
