import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import BottomTabNavigation from "./navigations/BottomTabNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import COLORS from "./constants/colors";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

// common screens
import LoadingPage from "./Screens/LoadingPage";
import LoginPage from "./Screens/LoginPage";
import ForgotPasswordPage from "./Screens/ForgotPasswordPage";
import SignUpChoosePage from "./Screens/SignUpChoosePage";
import SignUpPagePetOwner from "./Screens/SignUpPagePetOwner";
import SignUpPagePetSitter from "./Screens/SignUpPagePetSitter";
import SignUpPagePetCareCenter from "./Screens/SignUpPagePetCareCenter";

//pet care center
import CenterBottomNavigation from "./Screens/PetCareCenter/Navigations/CenterBottomNavigation";

// pet owner
import BottomNavigation from "./Screens/PetOwner/Navigations/BottomNavigation"

// pet sitter
import SitterBottomNavigation from "./Screens/PetSitter/Navigation/BottomNavigation";
import PetSitterProfile from "./Screens/PetSitter/Profile/PetSitterProfilePage";
import PetSitterDashboard from "./Screens/PetSitter/Home/SitterDashboard";
import AppointmentDetails from "./Screens/PetSitter/Appointments/AppointmentDetail";
import MyTaskDetails from "./Screens/PetSitter/Tasks/MyTaskDetails";
import Appointments from "./Screens/PetSitter/Appointments/Appointments";
import MyTasks from "./Screens/PetSitter/Tasks/MyTasks";
import History from "./Screens/PetSitter/History";
import chatDisplay from "./Screens/PetSitter/Chat/ChatDisplay"


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
        <Stack.Screen
          name="SignUpPagePetOwner"
          component={SignUpPagePetOwner}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUpPagePetSitter"
          component={SignUpPagePetSitter}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUpPagePetCareCenter"
          component={SignUpPagePetCareCenter}
          options={{
            headerShown: false,
          }}
        />

        {/* pet care center routes */}

        <Stack.Screen
          name="CenterBottomNavigation"
          component={CenterBottomNavigation}
          options={{
            headerShown: false,
          }}
        />

        {/* pet care center end */}

        {/* pet Owner routes */}
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        />

        {/* pet Owner end */}

        {/*pet sitter routes*/}

        <Stack.Screen
          name="SitterBottomNavigation"
          component={SitterBottomNavigation}
          options={{
            headerShown: false,
          }}
        />

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
        <Stack.Screen
          name="chatDisplay"
          component={chatDisplay}
          options={{
            headerShown: false,
          }}
        />


        {/*pet sitter end*/}

        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
