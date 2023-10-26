import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../../../assets/colors/colors";
import  ChatDisplay from "../Chat/ChatList"
import Home from '../Home/SitterDashboard'
import Notification from '../Notification/notification'
import Profile from '../Profile/PetSitterProfilePage'
import Appointments from '../Appointments/Appointments'
import AppointmentDetail from '../Appointments/AppointmentDetail'
import MyTasks from '../Tasks/MyTasks'
import TaskDetails from '../Tasks/MyTaskDetails'
import History from '../History'

const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

const SitterBottomNavigation = () => {

    

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
    initialRouteName="Home"
    screenOptions={screenOptions}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
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
        name="Chat"
        component={ChatDisplay}
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
        name="Notification"
        component={Notification}
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
        component={Profile}
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

const HomeStack = () => (
  <Stack.Navigator initialRouteName='Sitter_Home'>
    <Stack.Screen
      name="Sitter_Home"
      component={Home}
      options={{ headerShown: false }}/>

     <Stack.Screen 
      name="Appointments" 
      component={Appointments} 
      options={{ headerShown: false }}/>

    <Stack.Screen 
      name="AppointmentDetail" 
      component={AppointmentDetail} 
      options={{ headerShown: false }}/>

    <Stack.Screen 
      name="MyTasks" 
      component={MyTasks} 
      options={{ headerShown: false }}/>
  <Stack.Screen 
      name="TaskDetails" 
      component={TaskDetails} 
      options={{ headerShown: false }}/>
    <Stack.Screen 
      name="History" 
      component={History} 
      options={{ headerShown: false }}/>

  </Stack.Navigator>

);



export default SitterBottomNavigation