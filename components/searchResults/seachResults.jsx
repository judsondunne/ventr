import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground, ScrollView, Modal, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SettingsWindow from '../settingsWindow/settingsWindow'; // Make sure the SettingsWindow component is in the same directory or adjust the path accordingly

const SearchResults = ({ searchText, onPress }) => {
    const navigation = useNavigation();
    const [isSettingsVisible, setIsSettingsVisible] = useState(false);

    const handlePostPress = () => {
        navigation.navigate('PostDisplay');
    };

    const toggleSettingsWindow = () => {
        setIsSettingsVisible(!isSettingsVisible);
    };

    
const searchResults = [
    { id: 1, title: 'Yosemite National Park, CA', user: '@judsondunne', image: '/Users/judsondunne/ventr/ventr/assets/posts/photo1.png' },
    { id: 2, title: 'Grand Canyon National Park, AZ', user: '@judsondunne', image: '/Users/judsondunne/ventr/ventr/assets/posts/photo2.png' },
    { id: 3, title: 'Yellowstone National Park, WY', user: '@judsondunne', image: '/Users/judsondunne/ventr/ventr/assets/posts/photo3.png' },
    // Add more results as needed
];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Found 90+ Spots</Text>
                <TouchableOpacity onPress={toggleSettingsWindow} style={styles.headIconContainer}>
                    <Image source={require('../../assets/icons/Settings.png')} style={styles.headIcon} />
                </TouchableOpacity>
            </View>

            <ScrollView horizontal style={styles.scrollView}>
                {searchResults.map(result => (
                    <TouchableOpacity key={result.id} style={styles.resultItem} onPress={handlePostPress}>
                        <ImageBackground source={{ uri: result.image }} style={styles.image}>
                            <View style={styles.textContainer}>
                                <Text style={styles.titleText}>{result.title}</Text>
                                <Text style={styles.userText}>{result.user}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isSettingsVisible}
                onRequestClose={toggleSettingsWindow}
            >
                <View style={styles.modalView}>
                    <SettingsWindow onClose={toggleSettingsWindow} />
                </View>
            </Modal>
        </View>
    );
};







const styles = StyleSheet.create({
    container: {
        // Add container styles if needed
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginTop: 20,
    },
    headerText: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
    },
    headIconContainer: {
        // You may want to style the container of the icon for better touch feedback
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
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: 300,
        height: 540,
        borderRadius: 20,
    },
    textContainer: {
        padding: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 10,
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
    modalView: {
        flex: 1,
        
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Semi-transparent background for modal
    },
    // Add other styles that you might have for your SearchResults component
});

export default SearchResults;