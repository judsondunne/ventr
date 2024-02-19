import React from 'react';
import { View, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from './styles';

const CreateScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create</Text>
            <View style={styles.cameraContainer}>
                <RNCamera
                    style={styles.cameraPreview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.off}
                />
            </View>
            {/* Add more UI components here as needed */}
        </View>
    );
};

export default CreateScreen;
