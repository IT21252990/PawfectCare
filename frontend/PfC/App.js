import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import BottomTabNavigation from "./navigations/BottomTabNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import COLORS from "./constants/colors";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import LoadingPage from "./Screens/LoadingPage"
import LoginPage from "./Screens/LoginPage"
import ForgotPasswordPage from "./Screens/ForgotPasswordPage"
import SignUpChoosePage from "./Screens/SignUpChoosePage"
import PetSitterProfile from "./Screens/PetSitter/PetSitterProfilePage";
import PetSitterDashboard from "./Screens/PetSitter/SitterDashboard"
import AppointmentDetails from "./Screens/PetSitter/AppointmentDetail"
import MyTaskDetails from "./Screens/PetSitter/MyTaskDetails"
import Appointments from "./Screens/PetSitter/Appointments"
import MyTasks from "./Screens/PetSitter/MyTasks"
import History from "./Screens/PetSitter/History"



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const screenOptions = {
//   tabBarShowLabel: false,
//   headerShown: false,
//   tabBarHideOnKeyboard: true,
//   tabBarStyle: {
//     position: "absolute",
//     bottom: 0,
//     right: 0,
//     left: 0,
//     elevation: 0,
//     height: 60,
//     background: COLORS.primary,
//   },
// };

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingPage">
      
        <Stack.Screen
          name="LoadingPage"
          component={LoadingPage}
          options={{
            headerShown: false,
          }}
        />
        
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPasswordPage"
          component={ForgotPasswordPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUpChoosePage"
          component={SignUpChoosePage}
          options={{
            headerShown: false,
          }}
        />
        {/*pet sitter routes*/}

        <Stack.Screen
          name="PetSitterProfile"
          component={PetSitterProfile}
          options={{
            headerShown: false,
          }}
        />

          <Stack.Screen
          name="PetSitterDashboard"
          component={PetSitterDashboard}
          options={{
            headerShown: false,
          }}
        />

          <Stack.Screen
          name="AppointmentDetails"
          component={AppointmentDetails}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="MyTaskDetails"
          component={MyTaskDetails}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Appointments"
          component={Appointments}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="MyTasks"
          component={MyTasks}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="History"
          component={History}
          options={{
            headerShown: false,
          }}
        />
        {/*pet sitter end*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
