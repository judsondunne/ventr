import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import CustomTabBar from '../components/bottomNav/bottomNav'; // Adjust this path as necessary

// Import your screens
import ExploreScreen from '/Users/judsondunne/ventr/ventr/screens/Explore/explore.jsx';
import ExploreSearchScreen from '/Users/judsondunne/ventr/ventr/screens/Explore-Search/explore-search.jsx'; // Adjust the path as necessary
import ChallengesScreen from '/Users/judsondunne/ventr/ventr/screens/Challenges/challenges.jsx';
import CreateScreen from '/Users/judsondunne/ventr/ventr/screens/Create/create.jsx';
import FeedScreen from '/Users/judsondunne/ventr/ventr/screens/Feed/feed.jsx';
import ProfileScreen from '/Users/judsondunne/ventr/ventr/screens/Profile/profile.jsx';
import PostDisplayScreen from '/Users/judsondunne/ventr/ventr/screens/Post-Display/post-display.jsx';
import MessagesScreen from '/Users/judsondunne/ventr/ventr/screens/Messages/messages.jsx';
import EditScreen from '../screens/Edit/edit';
import SetLocationScreen from '../screens/SetLocation/setLocation';
import UploadScreen from '../screens/Upload/upload';


// Create the stack navigators
const Stack = createStackNavigator();

// Each stack navigator function
function ExploreStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" component={ExploreScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ExploreSearch" component={ExploreSearchScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PostDisplay" component={PostDisplayScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function ChallengesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Challenges" component={ChallengesScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// New Post Creation Stack Navigator
function PostCreationStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TakePhoto" component={CreateScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
      <Stack.Screen name="SetLocation" component={SetLocationScreen} />
      <Stack.Screen name="Upload" component={UploadScreen} />
    </Stack.Navigator>
  );
}

function FeedStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Messages" component={MessagesScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Feed" component={FeedStackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Create" component={PostCreationStackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Explore" component={ExploreStackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Challenges" component={ChallengesStackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
