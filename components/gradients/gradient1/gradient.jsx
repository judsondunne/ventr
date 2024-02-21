import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const GradientOverlay = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('/Users/judsondunne/ventr/ventr/assets/gradients/Gradient1.png')}
                style={styles.gradient}
            />
        </View>
    );
};

export default GradientOverlay;
