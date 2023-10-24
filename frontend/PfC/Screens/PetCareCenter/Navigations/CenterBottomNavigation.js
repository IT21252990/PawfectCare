import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../../../assets/colors/colors";
import  CenterChat from "../Chat/CenterChatList"
import CenterHome from '../Home/CenterHome'
import CenterNotifications from '../Notifications/CenterNotifications'
import CenterProfile from '../Profile/CenterProfile'

const CenterBottomNavigation = () => {

    const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const screenOptions={
    tabBarShowLabel:false,
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
    initialRouteName="CenterHome"
    screenOptions={screenOptions}
    >
      <Tab.Screen
        name="CenterHome"
        component={CenterHome}
        options={{
          tabBarLabel: 'Home',
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
        name="CenterChat"
        component={CenterChat}
        options={{
          tabBarLabel: 'Chat',
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
        name="CenterNotifications"
        component={CenterNotifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "notifications" : "notifications"}
                size={24}
                color={focused ? Colors.Up_Btn : Colors.Down_Btn}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="CenterProfile"
        component={CenterProfile}
        options={{
          tabBarLabel: 'Account',
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
  )
}

export default CenterBottomNavigation