import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Use multipliers to adjust sizes and positions dynamically
const buttonSize = width * 0.12; // Example size multiplier
const borderRadius = buttonSize / 2; // To make it a perfect circle

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
        bottom: 0, // Adjust this value as needed
        alignSelf: 'center',
        width: width*0.6,
        height: width*0.6,
        borderRadius: 10000,
        backgroundColor: '#223133',
        elevation: 5,
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        zIndex: 1, // Ensure the circle is behind other components
        transform: [{ translateY: width/4.8 }], // Ensure the circle is displayed on top of the map
    },
    filterIcon1: {
        position: 'absolute',
        bottom: 100, // Adjust as needed
        left: 60, // Adjust as needed
        zIndex: 100,
        // ... other styling properties ...
    },
    filterIcon2: {
        position: 'absolute',
        bottom: 100, // Adjust as needed
        left: 100, // Adjust as needed
        zIndex: 100,
        // ... other styling properties ...
    },
    filterIcon3: {
        position: 'absolute',
        bottom: 60, // Adjust as needed
        left: 150, // Adjust as needed
        // ... other styling properties ...
    },
    
    smallCircle: {
        position: 'absolute',
        bottom: 0, // Adjust this value as needed
        alignSelf: 'center',
        width: 80,
        height: 80,
        borderRadius: 10000,
        backgroundColor: '#FFFFFF', // Change to black
        elevation: 6, // Increase elevation to appear on top of other components
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        zIndex: 2, // Ensure the small circle is on top of the larger circle
        transform: [{ translateY: 14 }], // Ensure the circle is displayed on top of the map
    },
    searchIcon: {
        position: 'absolute',
        top: 80, // Adjust as needed
        
        right: 34, // Adjust as needed
        backgroundColor: 'transparent',
        zIndex: 3, // Ensure the icon is displayed on top of the circles
    },
    icon: {
        width: 40, // Adjust as needed
        height: 40, // Adjust as needed
    },
    // Add these styles to your styles.js
circleButton1: {
    position: 'absolute', // Adjust positioning as needed
    bottom: 15, // Adjust positioning as needed
    left: 118, // Adjust positioning as needed
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
    borderRadius: 30, // Half of the width/height to make it circle
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red', // Circle background color
},

circleImage1: {
    width: 28, // Adjust size as needed
    height: 28, // Adjust size as needed
    resizeMode: 'contain', // Adjust resizeMode as needed
},

circleButton2: {
    position: 'absolute', // Adjust positioning as needed
    bottom: 75, // Adjust positioning as needed
    left: 155, // Adjust positioning as needed
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
    borderRadius: 30, // Half of the width/height to make it circle
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0085FF', // Circle background color
},

circleImage2: {
    width: 35, // Adjust size as needed
    height: 35, // Adjust size as needed
    resizeMode: 'contain', // Adjust resizeMode as needed
},

circleButton3: {
    position: 'absolute', // Adjust positioning as needed
    bottom: 75, // Adjust positioning as needed
    right: 155, // Adjust positioning as needed
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
    borderRadius: 30, // Half of the width/height to make it circle
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC700', // Circle background color
},

circleImage3: {
    width: 30, // Adjust size as needed
    height: 30, // Adjust size as needed
    resizeMode: 'contain', // Adjust resizeMode as needed
},

circleButton4: {
    position: 'absolute', // Adjust positioning as needed
    bottom: 15, // Adjust positioning as needed
    right: 118, // Adjust positioning as needed
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
    borderRadius: 30, // Half of the width/height to make it circle
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#14A61B', // Circle background color
},

circleImage4: {
    width: 30, // Adjust size as needed
    height: 30, // Adjust size as needed
    resizeMode: 'contain', // Adjust resizeMode as needed
},

circleButton1: {
    position: 'absolute',
    bottom: height * 0.02, // Bottom position multiplier
    left: width * 0.25, // Left position multiplier for Button 1
    width: buttonSize,
    height: buttonSize,
    borderRadius: borderRadius,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },

  circleButton2: {
    position: 'absolute',
    bottom: height * 0.09, // Bottom position multiplier
    left: width * 0.35, // Left position multiplier for Button 2
    width: buttonSize,
    height: buttonSize,
    borderRadius: borderRadius,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0085FF',
  },

  circleButton3: {
    position: 'absolute',
    bottom: height * 0.09, // Bottom position multiplier
    right: width * 0.35, // Right position multiplier for Button 3
    width: buttonSize,
    height: buttonSize,
    borderRadius: borderRadius,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC700',
  },

  circleButton4: {
    position: 'absolute',
    bottom: height * 0.02, // Bottom position multiplier
    right: width * 0.25, // Right position multiplier for Button 4
    width: buttonSize,
    height: buttonSize,
    borderRadius: borderRadius,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#14A61B',
  },

});


export default styles;


