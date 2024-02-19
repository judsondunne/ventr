import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const BottomNav = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let iconName;
        if (route.name === 'Explore') {
          iconName = 'compass-outline';
        } else if (route.name === 'Challenges') {
          iconName = 'trophy-outline';
        } else if (route.name === 'Create') {
          iconName = 'plus-circle-outline';
        } else if (route.name === 'Feed') {
          iconName = 'home-outline';
        } else if (route.name === 'Profile') {
          iconName = 'account-circle-outline';
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            style={styles.tabItem}
          >
            <Icon name={iconName} size={37} color={isFocused ? '#CEA46F' : '#979797'} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNav;
