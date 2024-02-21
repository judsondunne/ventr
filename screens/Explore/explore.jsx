import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './styles'; // Import your styles
import { useNavigation } from '@react-navigation/native';
import { darkMapStyle } from './darkModeStyles';

    
const ExploreScreen = () => {
    const navigation = useNavigation(); // Initialize navigation
    

    const handleSearchPress = () => {
        navigation.navigate('ExploreSearch'); // Navigate to ExploreSearch screen
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
            customMapStyle={darkMapStyle} // Apply custom map style
        >
            <Marker
                coordinate={{
                    latitude: 38.89511,
                    longitude: -77.03637,
                }}
                title={"title"}
                description={"description"}
            />
            {/* Add more markers as needed */}
        </MapView>

            <View style={styles.circle} />
            <View style={styles.smallCircle} />
            <TouchableOpacity style={styles.searchIcon} onPress={handleSearchPress}>
                <Image source={require('../../assets/icons/Search.png')} style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.circleButton1}>
                <Image source={require('../../assets/icons/car.png')} style={styles.circleImage1} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.circleButton2}>
                <Image source={require('../../assets/icons/bicycle.png')} style={styles.circleImage2} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.circleButton3}>
                <Image source={require('../../assets/icons/skiing.png')} style={styles.circleImage3} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.circleButton4}>
                <Image source={require('../../assets/icons/dots.png')} style={styles.circleImage4} />
            </TouchableOpacity>

            
        </View>
    );
};

export default ExploreScreen;
