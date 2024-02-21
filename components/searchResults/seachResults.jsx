import React from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const SearchResults = ({ searchText, onPress }) => {
    const navigation = useNavigation(); // Initialize navigation

    const handlePostPress = () => {
        navigation.navigate('PostDisplay'); // Navigate to ExploreSearch screen
    };

    // Mock data for search results
    const searchResults = [
        { id: 1, title: 'Yosemite National Park, CA', user: '@judsondunne', image: '/Users/judsondunne/ventr/ventr/assets/posts/photo1.png' },
        { id: 2, title: 'Grand Canyon National Park, AZ', user: '@judsondunne', image: '/Users/judsondunne/ventr/ventr/assets/posts/photo2.png' },
        { id: 3, title: 'Yellowstone National Park, WY', user: '@judsondunne', image: '/Users/judsondunne/ventr/ventr/assets/posts/photo3.png' },
        // Add more results as needed
    ];

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Found 90+ Spots</Text>

                <TouchableOpacity style={styles.headText}>
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
        </View>
    );
};

export default SearchResults;
