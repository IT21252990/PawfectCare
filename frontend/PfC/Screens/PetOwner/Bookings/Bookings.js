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
} from "react-native";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  deleteUser,
} from "firebase/auth";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import { FIRESTORE_DB } from "../../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../../assets/colors/colors";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [centerNames, setCenterNames] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    const fetchBookings = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const userUid = user.uid;

        const q = query(
          collection(FIRESTORE_DB, "bookings"),
          where("uid", "==", userUid)
        );

        const querySnapshot = await getDocs(q);
        const bookingData = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          bookingData.push(data);
        });

        setBookings(bookingData);
      }
    };

    const fetchCenterNames = async () => {
      const firestore = getFirestore();
      const centersRef = collection(firestore, "care_Center_Profiles");
      const centerNames = {};

      for (const booking of bookings) {
        const centerId = booking.centerId;
        const centerDoc = await getDoc(doc(centersRef, centerId));

        if (centerDoc.exists()) {
          const centerData = centerDoc.data();
          centerNames[centerId] = centerData.centerName; 

        }
      }

      setCenterNames(centerNames);
    };

    fetchBookings();
    fetchCenterNames();
  }, [bookings]);


  return (

    <ImageBackground
      source={require("../../../assets/images/mainbg.jpeg")}
      style={styles.container}
      imageStyle={styles.background}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}> My Bookings </Text>
      </View>

      <ScrollView>
        {bookings.map((booking, index) => (
          <TouchableOpacity
            style={styles.bookButton}
            // onPress={() => bookHandler(booking.center)}
          >
            <View
              key={index}
              style={styles.backgroundBox}>

              <View style={styles.centerImageContainer}>
                <Image
                  source={require("../../../assets/images/pet-owner-card.png")}
                  style={styles.centerImage}
                />
              </View>
              <View style={styles.textContainer}>

                <Text style={styles.centerNameText}>{booking.petName}</Text>
                <Text style={styles.cityText}>{centerNames[booking.centerId]}</Text>
                <Text style={styles.cityText}>Status: {booking.bookingStatus}</Text>

              </View>

            </View>
          </TouchableOpacity>
        ))}

      </ScrollView>
    </ImageBackground>
  );

};

export default Bookings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 100,
    marginLeft: 0,
    marginTop: 0,
    borderRadius: 40,
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
  backgroundBox: {
    width: 380,
    height: 180,
    borderRadius: 40,
    backgroundColor: Colors.transparent_bgCard,
    margin: 10,
    alignSelf: 'center',
  },
  centerImageContainer: {
    width: 110,
    height: 110,
    borderRadius: 110,
    backgroundColor: Colors.ternary,
    elevation: 30,
    marginLeft: 25,
    marginTop: 30
  },
  centerImage: {
    width: 95,
    height: 95,
    borderRadius: 110,
    alignSelf: 'center',
    alignItems: 'center',
  },
  centerNameText: {
    color: Colors.scondory,
    fontWeight: "bold",
    fontSize: 24,
    fontWeight: "400",
    position: "relative",
    marginTop: 8,
    alignSelf: "center",

  },
  cityText: {
    color: "#3D3836",
    fontSize: 20,
    fontWeight: "400",
    position: "relative",
    marginTop: 13,
    alignSelf: "center",
  },
  textContainer: {
    marginLeft: 80,
    marginTop: -120
  }
})