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
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import Colors from "../../../assets/colors/colors";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const Profile = () => {

  const navigation = useNavigation();

  const logoutHandler = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);

      // Display a success toast message
      Toast.show({
        type: "success",
        position: "bottom",
        text1: "Logged Out",
        text2: "You have been successfully logged out.",
        visibilityTime: 3000, // 3 seconds
        autoHide: true,
      });

      // Navigate to the login screen
      navigation.navigate("LoginPage");
    } catch (error) {
      console.error("Error logging out: ", error);

      // Display an error toast message
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Error",
        text2: "There was an error while logging out. Please try again.",
        visibilityTime: 3000, // 3 seconds
        autoHide: true,
      });
    }
  };


  return (

    <ImageBackground
      source={require("../../../assets/images/mainbg.jpeg")}
      style={styles.container}
      imageStyle={styles.background}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Manage Your Pet Profiles </Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.addPetButton}
          onPress={() => navigation.navigate("AddNewPet")}
        >
          <Ionicons name="duplicate" size={40} color={Colors.Btn_Negative} />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={logoutHandler}
        >
          
          <Text style={styles.logoutButtonText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>


      </ScrollView>
      </ImageBackground>
  );
};

export default Profile;

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

  logoutButton: {
    width: 100,
    height: 54,
    marginTop: 15,
    marginBottom: 50,
    borderRadius: 20,
    backgroundColor: Colors.btn_Danger,
    justifyContent: "center",
    alignSelf:"center",
    // marginLeft: 140,
    elevation:10
  },
  logoutButtonText: {
    color: Colors.scondory,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },


  addPetButton: {
    width: 60,
    height: 60,
    marginTop: 15,
    marginBottom: 50,
    borderRadius: 20,
    backgroundColor: Colors.transparent_bgCard,
    alignItems: "center",
    justifyContent: "center",
    alignSelf:"center",
    // marginLeft: 155,
    elevation:10
  }

})