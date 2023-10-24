// BottomNavigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Home from '../Home/Home';
import ChatDisplay from '../Chat/ChatDisplay';
import Bookings from '../Bookings/Bookings';
import Profile from '../Profile/Profile';
import AddNewPet from '../Home/AddNewPet';
import BookNowDetails from '../Home/BookNowDetails';
import Colors from '../../../assets/colors/colors';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator 
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 60,
          background: Colors.ternary
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home"}
              size={24}
              color={focused ? Colors.Up_Btn : Colors.Down_Btn}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatDisplay}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "chatbubbles" : "chatbubbles"}
              size={24}
              color={focused ? Colors.Up_Btn : Colors.Down_Btn}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "clipboard" : "clipboard"}
              size={24}
              color={focused ? Colors.Up_Btn : Colors.Down_Btn}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person"}
              size={24}
              color={focused ? Colors.Up_Btn : Colors.Down_Btn}
            />
          ),
        }}
      />
     
    </Tab.Navigator>
  );
};

const HomeStack = () => (
  <Stack.Navigator initialRouteName='Owner_Home'>
    <Stack.Screen
      name="Owner_Home"
      component={Home}
      options={{ headerShown: false }}/>

     <Stack.Screen 
      name="BookNowDetails" 
      component={BookNowDetails} 
      options={{ headerShown: false }}/>

    <Stack.Screen 
      name="AddNewPet" 
      component={AddNewPet} 
      options={{ headerShown: false }}/>
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Owner_Profile"
      component={Profile}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default BottomNavigation;
