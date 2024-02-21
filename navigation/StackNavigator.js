import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import ExploreScreen from '../screens/Explore/explore';
import ExploreSearchScreen from '../screens/Explore-Search/explore-search'; // Adjust the path as necessary

import ChallengesScreen from '../screens/Challenges/challenges';
import CreateScreen from '../screens/Create/create';
import FeedScreen from '../screens/Feed/feed';
import ProfileScreen from '../screens/Profile/profile';
import CustomTabBar from '../components/bottomNav/bottomNav'; // Adjust this path as necessary
import PostDisplayScreen from '../screens/Post-Display/post-display';
import MessagesScreen from '../screens/Messages/messages';

// Create the stack navigators
const ExploreStack = createStackNavigator();
//const PostDisplayStack = createStackNavigator();
const ChallengesStack = createStackNavigator();
const CreateStack = createStackNavigator();
const FeedStack = createStackNavigator();
const ProfileStack = createStackNavigator();

// Each stack navigator function
function ExploreStackNavigator() {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen name="Explore" component={ExploreScreen} options={{ headerShown: false }} />
      {/* Additional screens can be added to this stack */}
      <ExploreStack.Screen name="ExploreSearch" component={ExploreSearchScreen} options={{ headerShown: false }} />
      
      <ExploreStack.Screen name="PostDisplay" component={PostDisplayScreen} options={{ headerShown: false }} />
    </ExploreStack.Navigator>
  );
}

function ChallengesStackNavigator() {
  return (
    <ChallengesStack.Navigator>
      <ChallengesStack.Screen name="Challenges" component={ChallengesScreen} options={{ headerShown: false }} />
      {/* Additional screens can be added to this stack */}
    </ChallengesStack.Navigator>
  );
}

// function PostDisplayStack() {
//     return (
//       <PostDisplayStack.Navigator>
//         <PostDisplayStack.Screen name="PostDisplay" component={PostDisplayScreen} options={{ headerShown: false }} />
//         {/* Additional screens can be added to this stack */}
//       </PostDisplayStack.Navigator>
//     );
//   }

function CreateStackNavigator() {
  return (
    <CreateStack.Navigator>
      <CreateStack.Screen name="Create" component={CreateScreen} options={{ headerShown: false }} />
      {/* Additional screens can be added to this stack */}
    </CreateStack.Navigator>
  );
}

function FeedStackNavigator() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Feed" component={FeedScreen} options={{ headerShown: false }} />
      {/* Additional screens can be added to this stack */}
    </FeedStack.Navigator>
  );
}

function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      {/* Additional screens can be added to this stack */}
      <ExploreStack.Screen name="Messages" component={MessagesScreen} options={{ headerShown: false }} />
    </ProfileStack.Navigator>
  );
}

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Feed" component={FeedStackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Create" component={CreateStackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Explore" component={ExploreStackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Challenges" component={ChallengesStackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} options={{ headerShown: false }} />
      {/* ...other tabs */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
