import React from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles'; // Import your styles

// Import your icons
const searchIcon = require('../../assets/icons/Search.png');
const closeIcon = require('../../assets/icons/Close.png'); // Replace with your actual close icon path

const ExploreSearchScreen = ({ navigation }) => {
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
            >
                {/* Your Marker component */}
            </MapView>
            
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
                <TouchableOpacity style={styles.iconButton}>
                    <Image source={searchIcon} style={styles.searchIcon} />
                </TouchableOpacity>
                
            </View>
        </View>
    );
};

export default ExploreSearchScreen;
