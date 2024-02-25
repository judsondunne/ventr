import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Dimensions, Animated, PanResponder } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { darkMapStyle } from './darkModeStyles';

const ExploreScreen = () => {
    const navigation = useNavigation();
    const [rotation] = useState(new Animated.Value(0));

    const handleSearchPress = () => {
        navigation.navigate('ExploreSearch');
    };

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: (event, gestureState) => {
                // Add your logic here if needed
                return true;
            },
            onPanResponderMove: (event, gestureState) => {
                const { moveX, moveY } = gestureState;
                const centerX = Dimensions.get('window').width / 2;
                const centerY = Dimensions.get('window').height / 2 + 200; // Adjusted for circle's vertical position
    
                const angleRad = Math.atan2(moveY - centerY, moveX - centerX);
                let angleDeg = angleRad * (180 / Math.PI);
                if (angleDeg < 0) {
                    angleDeg += 360;
                }
    
                rotation.setValue(angleDeg);
            },
        })
    ).current;

    const rotateStyle = {
        transform: [
            {
                rotate: rotation.interpolate({
                    inputRange: [0, 360],
                    outputRange: ['0deg', '360deg'],
                }),
            },
        ],
    };

    const renderCircleButtons = () => {
        const numButtons = 9; // Number of buttons including the existing one
        const buttonRadius = width * 0.3; // Adjust as needed
        const angleIncrement = (2 * Math.PI) / numButtons;
    
        const icons = [
            require('/Users/judsondunne/ventr/ventr/assets/filterIcons/Biking.png'),
            require('/Users/judsondunne/ventr/ventr/assets/filterIcons/Camping.png'),
            require('/Users/judsondunne/ventr/ventr/assets/filterIcons/Diving.png'),
            require('/Users/judsondunne/ventr/ventr/assets/filterIcons/Driving.png'),
            require('/Users/judsondunne/ventr/ventr/assets/filterIcons/Golfing.png'),
            require('/Users/judsondunne/ventr/ventr/assets/filterIcons/Hiking.png'),
            require('/Users/judsondunne/ventr/ventr/assets/filterIcons/RockClimbing.png'),
            require('/Users/judsondunne/ventr/ventr/assets/filterIcons/Running.png'),
            require('/Users/judsondunne/ventr/ventr/assets/filterIcons/Skiing.png'),
        ];
    
        return icons.map((icon, index) => {
            const angle = (index * angleIncrement) - (Math.PI / 2); // Start from top
            const buttonX = buttonRadius * Math.cos(angle);
            const buttonY = buttonRadius * Math.sin(angle);
    
            // Calculate individual rotation to ensure each icon always faces upwards
            const individualRotation = rotation.interpolate({
                inputRange: [0, 360],
                outputRange: [`${angle * (180 / Math.PI)}deg`, `${angle * (180 / Math.PI) - rotation._value}deg`],
            });
    
            const individualRotationValue = Animated.subtract(new Animated.Value(0), individualRotation); // Extract the value and make it negative
    
            return (
                <Animated.View
                    key={index}
                    style={[
                        styles.circleButton,
                        {
                            transform: [
                                { translateX: buttonX },
                                { translateY: buttonY },
                                { rotate: individualRotationValue.interpolate({
                                    inputRange: [-360, 0, 360],
                                    outputRange: ['-360deg', '0deg', '360deg']
                                }) }, // Apply negative individual rotation
                            ],
                        },
                    ]}
                >
                    <Image source={icon} style={styles.circleImage} />
                </Animated.View>
            );
        });
    };
    
    
    
    
    
    
    
    
    
    

    const handleIconButtonPress = () => {
        // Handle icon button press action here
    };

    return (
        <View style={styles.container} {...panResponder.panHandlers}>
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
                <Marker
                    coordinate={{
                        latitude: 38.89511,
                        longitude: -77.03637,
                    }}
                    title={"title"}
                    description={"description"}
                />
            </MapView>

            <View style={styles.circle} />
            <Animated.View style={[styles.circle, rotateStyle]}>
                {renderCircleButtons()}
            </Animated.View>

            <View style={styles.smallCircle} />
            <TouchableOpacity style={styles.searchIcon} onPress={handleSearchPress}>
                <Image source={require('../../assets/icons/Search.png')} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    circle: {
        position: 'absolute',
        bottom: (width * 0.6 / 2) - 200,
        alignSelf: 'center',
        width: width * 0.6,
        height: width * 0.6,
        borderRadius: width * 0.6 / 2,
        backgroundColor: '#223133',
        elevation: 5,
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleButton: {
        position: 'absolute',
        width: 78,
        height: 78,
        borderRadius: 39,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleImage: {
        width: 58,
        height: 58,
        resizeMode: 'contain',
    },
    smallCircle: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        width: 80,
        height: 80,
        borderRadius: 10000,
        backgroundColor: '#FFFFFF',
        elevation: 6,
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        zIndex: 2,
        transform: [{ translateY: 14 }],
    },
    searchIcon: {
        position: 'absolute',
        top: 80,
        right: 34,
        backgroundColor: 'transparent',
        zIndex: 3,
    },
    icon: {
        width: 40,
        height: 40,
    },
});

export default ExploreScreen;
