import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        //marginTop: 170,
    },
    headerText: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
    },
    headText: {
        color: 'white',
    },
    headIcon: {
        width: 50,
        height: 50,
        borderRadius: 8,
    },
    scrollView: {
        backgroundColor: "#223032",
        flexDirection: 'row',
        paddingHorizontal: 30,
        marginTop: 20,
    },
    resultItem: {
        marginRight: 10,
        borderRadius: 10, // Adjust the border radius as needed
        overflow: 'hidden', // This makes sure the image respects the border radius
    },
    image: {
        width: 300,
        height: 540, // Set a fixed height for the image container
        borderRadius: 20, // Match the border radius of the resultItem
        position: 'relative', // Ensure the position of the container is relative
    },
    textContainer: {
         // Semi-transparent overlay for text
        padding: 10,
        position: 'absolute', // Position the text absolutely within the image container
        bottom: 0, // Position the text at the bottom of the image
        left: 0, // Position the text at the left of the image
        right: 0, // Position the text at the right of the image
        borderRadius: 10, // Adjust the border radius to match image border radius
    },
    titleText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    userText: {
        color: 'white',
        fontSize: 12,
    },
    container: {
        flex: 1,
        backgroundColor: '#223032',
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
});

export default styles;
