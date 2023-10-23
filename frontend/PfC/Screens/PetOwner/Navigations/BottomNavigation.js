import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import  Home from "../Home/Home"
import ChatDisplay from '../Chat/ChatDisplay'
import Bookings from '../Bookings/Bookings'
import Profile from '../Profile/Profile'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../../../assets/colors/colors";

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
        background: Colors.ternary
    }
}

  return (
    <Tab.Navigator 
    initialRouteName="Home"
    screenOptions={screenOptions}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "home" : "home"}
                size={24}
                // color={Colors.primary}
                color={focused ? Colors.Up_Btn : Colors.Down_Btn}
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
                name={focused ? "chatbubbles" : "chatbubbles"}
                size={24}
                color={focused ? Colors.Up_Btn : Colors.Down_Btn}
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
                name={focused ? "clipboard" : "clipboard"}
                size={24}
                color={focused ? Colors.Up_Btn : Colors.Down_Btn}
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
                name={focused ? "person" : "person"}
                size={24}
                color={focused ? Colors.Up_Btn : Colors.Down_Btn}
              />
            );
          },
        }}
      />

    </Tab.Navigator>
  );

};

export default BottomNavigation ;






