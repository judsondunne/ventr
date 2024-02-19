import React from 'react';
import MapView, { Marker } from 'react-native-maps';

import { View, StyleSheet } from 'react-native';

const darkModeMapStyle = [
    
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    // Other style rules...
  ];

  const ExploreScreen = () => {
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
          mapStyle={darkModeMapStyle}
        >
          {/* Example Marker */}
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
        <View style={styles.circle}/>
      </View>
    );
  };
  

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default ExploreScreen;
