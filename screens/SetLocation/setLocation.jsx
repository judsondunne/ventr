import React, { useState, useEffect } from 'react';
import DropdownMenu from '../../components/dropDown/dropDown';
import { 
  StyleSheet, Text, View, TextInput, TouchableOpacity, Platform, Image, 
  Keyboard, ActivityIndicator, Modal
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { darkMapStyle } from '/Users/judsondunne/ventr/ventr/screens/Explore/darkModeStyles.js';
import * as Location from 'expo-location';
import _ from 'lodash';

const SetLocationScreen = ({ route, navigation }) => {
  const { image } = route.params;
  const [region, setRegion] = useState(null);
  const [shareSpots, setShareSpots] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [spotType, setSpotType] = useState('Public spot');


  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      getLocation();
    } else {
      console.log("Permission denied");
    }
  };

  const getLocation = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      throttledReverseGeocode(location.coords.latitude, location.coords.longitude);
      setLoading(false); // Set loading to false when location is retrieved
      console.log("Collected location:", location.coords);
    } catch (error) {
      console.log("Error getting location:", error);
      setLoading(false); // Also set loading to false in case of error
    }
  };

  const throttledReverseGeocode = _.throttle((latitude, longitude) => {
    reverseGeocode(latitude, longitude);
  }, 1000); // Throttle the reverse geocoding function

  const reverseGeocode = async (latitude, longitude) => {
    try {
      const addressResponse = await Location.reverseGeocodeAsync({ latitude, longitude });
      if (addressResponse.length > 0) {
        const address = addressResponse[0];
        setSearchText(`${address.name}, ${address.street}, ${address.city}`);
      }
    } catch (error) {
      console.log("Error fetching address:", error);
    }
  };

  const clearSearchText = () => {
    setSearchText('');
  };

  const onRegionChangeComplete = (newRegion) => {
    setRegion(newRegion);
    throttledReverseGeocode(newRegion.latitude, newRegion.longitude); // Call throttled function
    console.log(`Latitude: ${newRegion.latitude}, Longitude: ${newRegion.longitude}`);
  };

  const goToNextScreen = () => {
    navigation.navigate('Upload', { image: image, location: region });
  };

  const handleSearch = async () => {
    Keyboard.dismiss();
    try {
      const location = await Location.geocodeAsync(searchText);
      if (location.length > 0) {
        const { latitude, longitude } = location[0];
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      }
    } catch (error) {
      console.log("Error searching location:", error);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Back arrow */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {region && (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={region}
          onRegionChangeComplete={onRegionChangeComplete}
          customMapStyle={darkMapStyle}
        />
      )}
      <TouchableOpacity style={styles.nextButton} onPress={goToNextScreen}>
        <Text>Next</Text>
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for a location"
          placeholderTextColor="#808080"
          style={styles.searchBar}
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
        {searchText.length > 0 && (
          <TouchableOpacity style={styles.clearButton} onPress={clearSearchText}>
            <Ionicons name="close" size={24} color="#808080" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.markerFixed}>
        <Image style={styles.marker} source={require('/Users/judsondunne/ventr/ventr/assets/icons/MapMarker.png')} />
      </View>
     <TouchableOpacity style={styles.toggleButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.toggleButtonText}>{spotType}</Text>
      </TouchableOpacity>
      <View style={styles.dropdownContainer}>
    <DropdownMenu
      onSelect={(value) => setSpotType(value)}
      selected={spotType} 
    />
  </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    loadingContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    nextButton: {
      position: 'absolute',
      top: Platform.select({ ios: 60, android: 40 }),
      borderRadius: 10,
      backgroundColor: "#444343",
      paddingHorizontal: 10,
      paddingVertical: 5,
      right: 20,
    },
    backButton: {
      position: 'absolute',
      top: Platform.select({ ios: 60, android: 40 }),
      borderRadius: 10,
      backgroundColor: "#444343",
      paddingHorizontal: 10,
      paddingVertical: 5,
      left: 20,
      zIndex: 1, // Ensuring the back button is above the map
    },
    searchContainer: {
      position: 'absolute',
      top: 130,
      width: '80%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchBar: {
      flex: 1,
      height: 35,
      paddingHorizontal: 10,
      borderRadius: 10,
      backgroundColor: '#161E1F',
      color: '#FFFFFF',
    },
    clearButton: {
      paddingHorizontal: 10,
    },
    markerFixed: {
      left: '50%',
      marginLeft: -24,
      marginTop: -48,
      position: 'absolute',
      top: '50%'
    },
    marker: {
      height: 25,
      width: 25
    },
    switch: {
      // Remove this style, not necessary for the modal
    },
    shareSpotsText: {
      // Adjust as needed
    },
    dropdownContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 30, // Adjust as needed
        zIndex: 1, // Ensure the dropdown is above other components
      },
    
  });
  
  

export default SetLocationScreen;
