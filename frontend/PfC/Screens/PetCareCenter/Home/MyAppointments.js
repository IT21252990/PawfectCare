import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  deleteUser,
} from "firebase/auth";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import Colors from "../../../assets/colors/colors";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const MyAppointments = () => {
  const [centerID, setCenterID] = useState(null);
  const [bookings, setBookings] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCenterID(user.uid);
      } else {
        navigation.navigate("LoginPage");
      }
      const querySnapshot = await getDocs(collection(FIRESTORE_DB, "bookings"));
      const bookingsDetails = [];
      querySnapshot.forEach((doc) => {
        const bData = doc.data();
        if (centerID == bData.centerId) {
          bookingsDetails.push(bData);
        }
      });
      setBookings(bookingsDetails);
    });
  }, []);

  const bookHandler = (selectedItem) => {
    navigation.navigate("BookingAcceptNowDetails", { selectedItem })
  }

  return (
    <ImageBackground
      source={require("../../../assets/images/mainbg.jpeg")}
      style={styles.container}
      imageStyle={styles.background}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>My APPOINTMENTS</Text>
      </View>
      <ScrollView>
        {bookings.map((booking, index) => (
          <View key={index}>
            <TouchableOpacity
            onPress={() => bookHandler(booking)}
            >
              <View style={styles.cardContainer}>
                <View style={styles.avatarContainer}>
                  <Image
                    source={require("../../../assets/images/loginpic.png")}
                    style={styles.avatarImage}
                  />
                </View>
                <Text style={styles.userName}>
                  {booking.petName} :- ( {booking.city} )
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default MyAppointments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 100,
    marginLeft: 0,
    marginTop: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: Colors.top_title_bar,
    alignItems: "center",
    elevation: 40,
  },
  headerText: {
    color: Colors.scondory,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 55,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  avatarContainer: {
    width: 110,
    height: 110,
    borderRadius: 110,
    backgroundColor: Colors.ternary,
    justifyContent: "center",
    alignItems: "center",
    elevation: 30,
  },
  avatarImage: {
    width: 110,
    height: 110,
    borderRadius: 110,
  },
  badgeContainer: {
    width: 102,
    height: 27.118,
    borderRadius: 10,
    backgroundColor:
      "linear-gradient(180deg, #FFD2A6 96.35%, rgba(255, 126, 0, 0.00) 100%)",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    backgroundColor: Colors.transparent_bgCard,
    elevation: 5,
    height: 80,
    width: 350,
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "column",
    alignSelf: "center",
    borderRadius: 20,
  },
  userName: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 100,
    marginTop: 25,
    color: Colors.scondory,
  },
  avatarContainer: {
    borderWidth: 2,
    width: 60,
    height: 60,
    position: "absolute",
    borderRadius: 60,
    backgroundColor: Colors.ternary,
    marginLeft: 20,
    marginTop: 10,
    borderColor: Colors.primary,
  },
  avatarImage: {
    width: 55,
    height: 55,
  },
  badgeText: {
    width: 81,
    height: 21.307,
    color: "#3D3836",

    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "center",
  },
  buttonimageupload: {
    backgroundColor: Colors.ternary,
    padding: 5,
    borderRadius: 20,
    marginLeft: 10,
    elevation: 10,
  },
  buttonTextuploadImage: {
    color: Colors.scondory,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
  },
  formContainer: {
    marginLeft: 0,
    marginTop: 30,
  },
  label: {
    width: "auto",
    height: 30,
    marginLeft: 30,
    color: Colors.scondory,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  shadowBox: {
    width: 330,
    height: 45,
    marginLeft: 30,
    borderRadius: 20,
    backgroundColor: Colors.ternary,
    marginBottom: 10,
    padding: 15,
    elevation: 6,
  },
  shadowBoxArea: {
    width: 330,
    height: 100,
    marginLeft: 30,
    borderRadius: 20,
    backgroundColor: Colors.ternary,
    marginBottom: 10,
    padding: 15,
    elevation: 6,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.scondory,
  },
  inputArea: {
    flex: 1,
    fontSize: 16,
    color: Colors.scondory,
  },
  // Add styles for the buttons
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 50,
    marginBottom: 20,
  },
  saveButton: {
    width: "50%", // Take up full width
    marginLeft: 100,
    height: 54,
    borderRadius: 20,
    backgroundColor: Colors.Btn_Positive,
    justifyContent: "center",
    marginBottom: 20,
    elevation: 10,
  },
  horizontalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 15,
  },
  updatePasswordButton: {
    width: 160,
    marginLeft: 25,
    height: 54,
    borderRadius: 20,
    backgroundColor: Colors.Btn_Negative,
    justifyContent: "center",
    elevation: 10,
  },
  deleteAccountButton: {
    width: 160,
    marginRight: 25,
    height: 54,
    borderRadius: 20,
    backgroundColor: Colors.Btn_Negative,
    justifyContent: "center",
    elevation: 10,
  },
  buttonTextsave: {
    color: Colors.scondory,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonText: {
    color: Colors.scondory,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  logoutButton: {
    width: 100,
    height: 54,
    marginTop: 15,
    marginBottom: 50,
    borderRadius: 20,
    backgroundColor: Colors.btn_Danger,
    justifyContent: "center",
    marginLeft: 140,
    elevation: 10,
  },
  logoutButtonText: {
    color: Colors.scondory,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  backgroundBox: {
    width: 400,
    borderRadius: 50,
    backgroundColor: Colors.transparent_bgCard,
    marginBottom: 40,
    marginTop: 30,
  },
});
