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
import { collection, getDocs } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../../assets/colors/colors";

const BookingAcceptNowDetails = ({ route }) => {
  const { selectedItem } = route.params;

  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../../assets/images/mainbg.jpeg")}
      style={styles.container}
      imageStyle={styles.background}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>ACCEPT APPOINTMENTS</Text>
      </View>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.avatarContainer}>
            <Image
              source={require("../../../assets/images/loginpic.png")}
              style={styles.avatarImage}
            />
          </View>
        </View>

        <View style={styles.backgroundBox}>
          <View style={styles.formContainer}>
            <Text style={styles.label}>Pet Name :</Text>
            <View style={styles.shadowBox}>
              <TextInput
                style={styles.input}
                value={selectedItem.petName}
                editable={false}
              />
            </View>

            <Text style={styles.label}>Owner Name :</Text>
            <View style={styles.shadowBox}>
              <TextInput
                style={styles.input}
                value={selectedItem.accountHolderName}
                editable={false}
              />
            </View>

            <Text style={styles.label}>City :</Text>
            <View style={styles.shadowBox}>
              <TextInput
                style={styles.input}
                value={selectedItem.city}
                editable={false}
              />
            </View>

            <Text style={styles.label}>Contact Number :</Text>
            <View style={styles.shadowBox}>
              <TextInput
                style={styles.input}
                value={selectedItem.contactNumber}
                editable={false}
              />
            </View>

            <Text style={styles.label}>Pet Breed :</Text>
            <View style={styles.shadowBox}>
              <TextInput
                style={styles.input}
                value={selectedItem.petBreed}
                editable={false}
              />
            </View>

            <Text style={styles.label}>Agr of Pet :</Text>
            <View style={styles.shadowBox}>
              <TextInput
                style={styles.input}
                value={selectedItem.petAge}
                editable={false}
              />
            </View>

            <Text style={styles.label}>Gender :</Text>
            <View style={styles.shadowBox}>
              <TextInput
                style={styles.input}
                value={selectedItem.petGender}
                editable={false}
              />
            </View>

            <Text style={styles.label}>Medication and Allergies :</Text>
            <View style={styles.shadowBoxArea}>
              <TextInput
                style={styles.inputArea}
                multiline={true}
                numberOfLines={5}
                textAlignVertical="top"
                value={selectedItem.petMed}
                editable={false}
              />
            </View>

            <Text style={styles.label}>Personality :</Text>
            <View style={styles.shadowBoxArea}>
              <TextInput
                style={styles.inputArea}
                multiline={true}
                numberOfLines={5}
                textAlignVertical="top"
                value={selectedItem.petPersonality}
                editable={false}
              />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <View>
              <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.buttonTextsave}>Accept Appointment</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity 
              style={styles.cancelButton}
              onPress= {() => navigation.navigate("MyAppointments")}
              >
                <Text style={styles.buttonTextsave}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default BookingAcceptNowDetails;

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
    padding: 14,
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
    fontSize: 20,
    color: Colors.scondory,
  },
  inputArea: {
    flex: 1,
    fontSize: 20,
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
    width: "70%", // Take up full width
    height: 54,
    borderRadius: 20,
    backgroundColor: Colors.Btn_Positive,
    justifyContent: "center",
    marginBottom: 20,
    elevation: 10,
    alignSelf: "center",
  },
  cancelButton:{
    width: "70%", // Take up full width
    height: 54,
    borderRadius: 20,
    backgroundColor: Colors.Btn_Negative,
    justifyContent: "center",
    marginBottom: 50,
    marginTop:30,
    elevation: 10,
    alignSelf: "center",
  },
  horizontalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 15,
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
  backgroundBox: {
    width: 400,
    borderRadius: 50,
    backgroundColor: Colors.transparent_bgCard,
    marginBottom: 40,
    marginTop: 30,
  },
});
