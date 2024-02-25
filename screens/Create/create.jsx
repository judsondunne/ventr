import { StyleSheet, Text, View, Image } from 'react-native';
import { Camera, CameraType, FlashMode, TouchableOpacity } from 'expo-camera';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign for the circle arc icon
import * as MediaLibrary from 'expo-media-library'
import React, { useState, useEffect, useRef} from 'react';
import * as ImagePicker from 'expo-image-picker';


export default function CreateScreen( {navigation} ) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null); // Corrected variable name
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null); // Added missing state variable
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryStatus = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted'); // Corrected variable name
      setHasMediaLibraryPermission(mediaLibraryStatus.status === 'granted');
    })();
  }, []);
  

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        setImage(data.uri); // Set the state with the URI of the taken photo
        navigation.navigate('Edit', { image: data.uri }); // Navigate to EditScreen with the image URI
      } catch (e) {
        console.log(e);
      }
    }
  };


 const saveImage = async() => {
  if(image) {
    try{
        await MediaLibrary.createAssetAsync(image);
        alert('Picture saved! 🎉');
    } catch(e) {
      console.log(e);
    }
  }
 }

 const selectImage = async () => {
    try {
      const data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false, // Set allowsEditing to false
        aspect: [9, 32],
        quality: 1,
      });
      console.log("ImagePicker result:", data);
      if (data && !data.cancelled && data.assets.length > 0 && data.assets[0].uri) {
        const uri = data.assets[0].uri;
        const location = data.assets[0].exif;
        console.log("Image URI:", uri);
        console.log("Image loaction:", location);
        setImage(uri);
        navigation.navigate('Edit', { image: uri });
      } else {
        console.log("Image selection canceled or URI is not available.");
      }
    } catch (e) {
      console.log("Error selecting image:", e);
    }
  };
  
  
  
  
  


  if(hasCameraPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      
      <Camera
        style={styles.camera}
        type={type}
        flashMode={flash}
        ref={cameraRef}
      >
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          paddingTop: 80,
        }}>

            <AntDesign name="closecircle" size={35} color="white" onPress={() => navigation.goBack()} /> 
          <AntDesign name="reload1" size={24} color="white" onPress={() => {
            setType(type === CameraType.back ? CameraType.front: CameraType.back)
          }} /> 
          <AntDesign name={flash ? "flash" : "thunderbolto"} size={24} color="white" onPress={() => {
            setFlash(flash === FlashMode.off 
              ? FlashMode.on 
              : FlashMode.off
            );
          }}/>
        </View>
      </Camera>
        
      <View style={styles.buttonContainer}>
          
          <View style={styles.upload}>
      <AntDesign name="upload" size={35} color="white" onPress={selectImage} /> 
      </View>
    
    <View style={styles.captureButton} onTouchEnd={() => {
        takePicture();
        setImage(null);
        navigation.navigate('Edit', { image: image });
         // Pass the image parameter
    }}>
        <View style={styles.outerCircle} />
    </View>
    
</View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      bottom: 1,
      justifyContent: 'center',
    },
    camera: {
      flex:1,
      borderRadius: 20,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 100,
      left: 0, // Position the button container to the left side of the screen
      right: 0, // Make sure it spans the entire width
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    captureButton: {
      width: 85,
      height: 85,
      borderRadius: 100,
      borderWidth: 6,
      borderColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    outerCircle: {
      width: 85,
      height: 85,
      borderRadius: 100,
      borderWidth: 6,
      borderColor: '#fff',
      position: 'absolute',
    },
    upload: {
      position: 'absolute',
      left: 20, // Adjust as needed
    },
  });
