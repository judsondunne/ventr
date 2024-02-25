import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const FilterCircle = ({ onPress, iconSource, backgroundColor, bottom, left, right }) => {
    return (
        <TouchableOpacity
            style={[styles.circleButton, { backgroundColor, bottom, left, right }]}
            onPress={onPress}
        >
            <Image source={iconSource} style={styles.circleImage} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    circleButton: {
        position: 'absolute',
        width: 50, // Adjust size as needed
        height: 50, // Adjust size as needed
        borderRadius: 30, // Half of the width/height to make it circle
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleImage: {
        width: 30, // Adjust size as needed
        height: 30, // Adjust size as needed
        resizeMode: 'contain', // Adjust resizeMode as needed
    },
});

export default FilterCircle;
