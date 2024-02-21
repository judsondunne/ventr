import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './styles';
import { darkMapStyle } from '../Explore/darkModeStyles';
import GradientOverlay from '../../components/gradients/gradient2/gradient.jsx';
import SearchResults from '../../components/searchResults/seachResults.jsx'; // Import your SearchResults component

const searchIcon = require('../../assets/icons/Search.png');
const closeIcon = require('../../assets/icons/Close.png');

const ExploreSearchScreen = ({ navigation }) => {
    

    const [searchText, setSearchText] = useState('');
    const [showSearchResults, setShowSearchResults] = useState(false);

    const handleSearchPress = () => {
        if (searchText.trim() !== '') {
            setShowSearchResults(true);
            // You can perform further actions here like fetching search results
        }
    };

    const handleTextInputChange = text => {
        setSearchText(text);
        setShowSearchResults(false); // Hide search results when user starts typing
    };

    const handleSearchInputPress = () => {
        setShowSearchResults(false); // Hide search results when user clicks on search input
    };

    const handleSearchResultsPress = () => {
        // If search results are already shown, allow editing the search text
        //setShowSearchResults(false);
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 38.89511,
                    longitude: -77.03637,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                provider={PROVIDER_GOOGLE}
                customMapStyle={darkMapStyle}
            >
                {/* Your Marker component */}
            </MapView>

            <GradientOverlay pointerEvents="none" />

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search for your next adventure"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    onChangeText={handleTextInputChange}
                    onFocus={handleSearchInputPress}
                    value={searchText}
                />
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
                    <Image source={closeIcon} style={styles.closeIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={handleSearchPress}>
                    <Image source={searchIcon} style={styles.searchIcon} />
                </TouchableOpacity>
            </View>
                <View style={styles.searchResults}>
                    {/* Conditionally render search results */}
                    {showSearchResults && (
                        <SearchResults searchText={searchText} onPress={handleSearchResultsPress} />
                    )}
                </View>
        </View>
    );
};

export default ExploreSearchScreen;
