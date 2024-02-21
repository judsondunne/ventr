import React from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'; // Import your styles
import { darkMapStyle } from '../Explore/darkModeStyles';
import GradientOverlay from '../../components/gradients/gradient2/gradient.jsx';

// Import your icons
const searchIcon = require('../../assets/icons/Search.png');
const closeIcon = require('../../assets/icons/Close.png'); // Replace with your actual close icon path





const ExploreSearchScreen = ({ navigation }) => {

    

    const handleSearchPress = () => {
        navigation.navigate('ExploreSearchResults'); // Navigate to ExploreSearch screen
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

            {/* Search Bar Container */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search for your next adventure"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)" // Placeholder text color
                />
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
                    <Image source={closeIcon} style={styles.closeIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={handleSearchPress}>
                    <Image source={searchIcon} style={styles.searchIcon} />
                </TouchableOpacity>
            </View>
            
        </View>
    );
};

export default ExploreSearchScreen;

