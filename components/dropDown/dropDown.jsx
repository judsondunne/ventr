import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DropdownMenu = ({ onSelect, selected }) => {
  const [expanded, setExpanded] = useState(false);

  const options = [
    { label: 'Public spot', value: 'Public spot', icon: 'globe' },
    { label: 'Friends\' spot', value: 'Friends spot', icon: 'people' },
    { label: 'Secret spot', value: 'Secret spot', icon: 'alert' },
  ];

  const handleSelect = (value) => {
    onSelect(value);
  };

  const toggleDropdown = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.background}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.container}>
        {expanded ? (
          <Text style={[styles.placeholder]}>Location privacy</Text>
        ) : (
          <Text style={styles.selectedText}>{selected}</Text>
        )}
        <Ionicons name={expanded ? 'heart' : 'heart'} size={24} color="#000" />
      </TouchableOpacity>
      {expanded && (
        <View style={styles.dropdown}>
          {options.map((option) => (
            <TouchableOpacity key={option.value} style={styles.option} onPress={() => handleSelect(option.value)}>
              <Ionicons name={option.icon} size={24} color="#000" />
              <Text style={styles.optionText}>{option.label}</Text>
              {selected === option.value && <Ionicons name="radio-button-on" size={24} color="white" style={styles.selectedIcon} />}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#213032',
    padding: 10,
    borderRadius: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  placeholder: {
    fontSize: 18,
    borderWidth: 0,
    color: 'white' // Removing border for placeholder text
  },
  selectedText: {
    color: '#fff',
  },
  dropdown: {
    marginTop: 10,
    backgroundColor: '#213032',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#fff',
  },
  selectedIcon: {
    marginLeft: 'auto', // Align the selected icon to the far right
  }
});

export default DropdownMenu;
