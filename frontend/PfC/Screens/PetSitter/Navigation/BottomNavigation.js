import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../../../assets/colors/colors";
import  SitterChat from "../Chat/ChatDisplay"
import SitterHome from '../Home/SitterDashboard'
import SitterNotifications from '../Notification/notification'
import SitterProfile from '../Profile/PetSitterProfilePage'

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
    initialRouteName="SitterHome"
    screenOptions={screenOptions}
    >
      <Tab.Screen
        name="SitterHome"
        component={SitterHome}
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
        name="SitterChat"
        component={SitterChat}
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
        name="SitterNotification"
        component={SitterNotifications}
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
        name="SitterProfile"
        component={SitterProfile}
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