import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import  Home  from '../Home/Home';
import ChatDisplay from '../Chat/ChatDisplay'
import Bookings from '../Bookings/Bookings'
import Profile from '../Profile/Profile'
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const BottomNavigation = () => {

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const screenOptions={
    tabBarShowLabel: false,
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle:{
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
        background: COLORS.primary
    }
}

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={COLORS.tertinary}
              />
            );
          },
        }}
      />

    <Tab.Screen
        name="Chat"
        component={ChatDisplay}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={COLORS.tertinary}
              />
            );
          },
        }}
      />

    <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={COLORS.tertinary}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={COLORS.tertinary}
              />
            );
          },
        }}
      />

    </Tab.Navigator>
  );

};

export default BottomNavigation ;






