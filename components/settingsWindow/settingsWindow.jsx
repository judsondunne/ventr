import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Image, Modal } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';  // Assuming you're using Expo for icons

const SettingsWindow = ({ onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true} // Adjust visibility as needed
      onRequestClose={onClose}
    >
      <View style={styles.modalView}>
        <View style={styles.container}>
          <View style={styles.headerBar}>
            <Text style={styles.header}>Activities</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Ionicons name="close" size={30} color="black" style={styles.searchIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.searchBar}>
          <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="white"
          />
        </View>
        <Text style={styles.iconHeader}>Outdoor</Text>
          <ScrollView horizontal={true} contentContainerStyle={styles.iconsContainer}>
            {/* Exploration Section */}
            
            <TouchableOpacity>
              <Image source={require('../../assets/filterIcons/Skiing.png')} style={styles.circleImage1} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/filterIcons/Biking.png')} style={styles.circleImage1} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/filterIcons/Hiking.png')} style={styles.circleImage1} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/filterIcons/Swiming.png')} style={styles.circleImage1} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/filterIcons/Diving.png')} style={styles.circleImage1} />
            </TouchableOpacity>
          </ScrollView>
          <Text style={styles.iconHeader}>Adventure</Text>
          <ScrollView horizontal={true} contentContainerStyle={styles.iconsContainer}>
            {/* Exploration Section */}
            <TouchableOpacity>
              <Image source={require('../../assets/filterIcons/Skiing.png')} style={styles.circleImage1} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/filterIcons/Biking.png')} style={styles.circleImage1} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/filterIcons/Hiking.png')} style={styles.circleImage1} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/filterIcons/Swiming.png')} style={styles.circleImage1} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/filterIcons/Diving.png')} style={styles.circleImage1} />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default SettingsWindow;
