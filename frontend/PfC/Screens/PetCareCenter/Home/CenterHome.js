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
import * as Progress from "react-native-progress";
import FetchReviews from "./FetchReviews";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CenterProfile = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [centerName, setCenterName] = useState(null);
  const [availability, setAvailability] = useState(null);
  const navigation = useNavigation();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [reviews, setReviews] = useState([]);

  // const FetchReviews = async () => {
  //   const querySnapshot = await getDocs(collection(FIRESTORE_DB, "Reviews"));
  //   const reviewsData = [];
  //   querySnapshot.forEach((doc) => {
  //     const reviewData = doc.data();
  //     const reviewsData = [];
  //     reviewsData.push(reviewData);
  //   });
  //   setReviews(reviewsData);
  // };

  // FetchReviews();
  useEffect(() => {
    // Set up a reference to the "Reviews" collection in Firestore
    // const reviewsRef = FIRESTORE_DB.collection('Reviews');

    // Fetch data from Firestore and update the "reviews" state
    const fetchReviews = async () => {
      try {
        const snapshot = await getDocs(collection(FIRESTORE_DB, "Reviews"));
        const reviewsData = [];
        snapshot.forEach((doc) => {
          reviewsData.push(doc.data());
        });
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    // Set up an interval to update the current date
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    // Fetch reviews when the component mounts
    fetchReviews();

    // Clear the interval and return a cleanup function
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Extract year, month, and day from the current date
  const year = currentDate.getFullYear();
  const month = monthNames[currentDate.getMonth()]; // Get month name
  const day = currentDate.getDate();

  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      setUserEmail(user.email);
    } else {
      navigation.navigate("LoginPage");
    }
    const querySnapshot = await getDocs(
      collection(FIRESTORE_DB, "care_Center_Profiles")
    );
    querySnapshot.forEach((doc) => {
      const centerData = doc.data();
      if (userEmail == centerData.email) {
        setCenterName(centerData.centerName);
        setAvailability(centerData.availability);
      }
    });
  });

  function calculateProgress(availability) {
    let progress;
    if (availability !== null) {
      progress = parseFloat(availability) / 100.0;
    } else {
      progress = 0.0;
    }
    return progress;
  }
  const progress = calculateProgress(availability);

  return (
    <ImageBackground
      source={require("../../../assets/images/mainbg.jpeg")}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>DASHBOARD</Text>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.centernameText}>{centerName}</Text>
        </View>
        <View style={styles.backgroundBox}>
          <View style={styles.contentContainer}>
            <View style={styles.avatarContainer}>
              <Image
                source={require("../../../assets/images/loginpic.png")}
                style={styles.avatarImage}
              />
            </View>
            <View style={styles.calenderView}>
              <View style={styles.monthHolder}>
                <Text style={styles.mothTextStyle}>{month}</Text>
              </View>
              <Text style={styles.dayText}>{day}</Text>
              <Text style={styles.yearStyle}>{year}</Text>
            </View>
          </View>
        </View>

        <View>
          <TouchableOpacity 
           onPress={() => navigation.navigate("MyAppointments")}
          style={styles.saveButton}
          >
            <Text style={styles.buttonTextsave}>Check Appointments</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.backgroundBoxProgress}>
          <View style={styles.progresscontainer}>
            <Text style={styles.progressheaderText}>
              Availability of Center
            </Text>
            <View>
              <Progress.Bar
                progress={progress}
                width={300}
                height={50}
                color="#2ecc71"
                unfilledColor="#d5dbdb"
                borderWidth={0.5}
                borderRadius={10}
              />
            </View>
            <Text style={styles.progressText}>{availability}%</Text>
          </View>
        </View>

        <Text style={styles.reviewHeader}>Customer Reviews & Ratings</Text>
        <View style={styles.backgroundBoxReviews}>
          <ScrollView horizontal>
             {reviews.map((review, index) => (
            <FetchReviews
              key={index}
              user={review.user}
              description={review.description}
            />
          ))}
          </ScrollView>
         
        </View>

        <View style={styles.buttonContainer}>
          <View>
            <TouchableOpacity 
            style={styles.saveButton}
            onPress={() => navigation.navigate("CenterProfile")}
            >
              <Text style={styles.buttonTextsave}>Update Center Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.horizontalButtonContainer}>
            <View>
              <TouchableOpacity 
               onPress={() => navigation.navigate("ProcessingTasks")}
              style={styles.updatePasswordButton}
              >
                <Text style={styles.buttonText}>Processing Tasks</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity 
               onPress={() => navigation.navigate("CompletedTasks")}
              style={styles.deleteAccountButton}
              >
                <Text style={styles.buttonText}>Completed Tasks</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default CenterProfile;

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
  centernameText: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: Colors.scondory,
  },
  backgroundBox: {
    width: 350,
    borderRadius: 20,
    backgroundColor: Colors.transparent_bgCard,
    marginBottom: 30,
    marginTop: 30,
    height: 150,
    alignSelf: "center",
  },
  backgroundBoxProgress: {
    width: 350,
    borderRadius: 20,
    backgroundColor: Colors.transparent_bgCard,
    marginBottom: 10,
    marginTop: 10,
    height: 200,
    alignSelf: "center",
  },
  backgroundBoxReviews:{
    width: 350,
    borderRadius: 20,
    backgroundColor: Colors.transparent_bgCard,
    marginBottom: 10,
    marginTop: 10,
    height: "auto",
    alignSelf: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: 350,
    borderRadius: 20,
    backgroundColor: Colors.transparent_bgCard,
    marginBottom: 100,
    marginTop: 20,
    height: 300,
    alignSelf: "center",
  },
  contentContainer: {
    flexDirection: "row",
    width: 350,
  },
  avatarContainer: {
    width: 110,
    height: 110,
    borderRadius: 110,
    backgroundColor: Colors.ternary,
    elevation: 30,
    marginTop: 20,
    marginLeft: 20,
  },
  avatarImage: {
    width: 110,
    height: 110,
    borderRadius: 110,
  },
  calenderView: {
    width: 110,
    height: 110,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginLeft: 60,
    marginTop: 20,
  },
  monthHolder: {
    width: 110,
    height: 40,
    backgroundColor: "#ff4000",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  mothTextStyle: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
    color: Colors.scondory,
  },
  dayText: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.scondory,
  },
  yearStyle: {
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.scondory,
  },
  progresscontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  progressheaderText: {
    marginTop: 5,
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.scondory,
    marginBottom: 20,
  },
  progressText: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.scondory,
  },
  reviewHeader: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.scondory,
    textAlign: "center",
  },

  //
  badgeContainer: {
    width: 102,
    height: 27.118,
    borderRadius: 10,
    backgroundColor:
      "linear-gradient(180deg, #FFD2A6 96.35%, rgba(255, 126, 0, 0.00) 100%)",
    justifyContent: "center",
    alignItems: "center",
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

  saveButton: {
    width: "70%", // Take up full width
    height: 54,
    borderRadius: 20,
    backgroundColor: Colors.Btn_Positive,
    justifyContent: "center",
    marginBottom: 20,
    elevation: 10,
    marginTop: 20,
    alignSelf: "center",
  },
  horizontalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0,
    marginBottom: 50,
  },
  updatePasswordButton: {
    width: 160,
    marginLeft: 10,
    height: 100,
    borderRadius: 20,
    backgroundColor: Colors.Btn_Negative,
    justifyContent: "center",
    elevation: 10,
  },
  deleteAccountButton: {
    width: 160,
    marginRight: 10,
    height: 100,
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
});
