import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";

import { useNavigation } from '@react-navigation/native';



const PetSitterProfile = () => {

  const navigation = useNavigation();

  const handleUpdateProfile = () => {
    // Navigate to the profile page
    navigation.navigate('PetSitterProfile'); // Replace 'Profile' with the actual name of your profile page in the navigator.
  };
  return (
    <ImageBackground
      source={require("../../../assets/images/mainbg.jpeg")}
      style={styles.container}
      imageStyle={styles.background}
    >
    
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>DASHBOARD</Text>
        </View>

        <TouchableOpacity style={styles.apointment}>
          <Text style={styles.AppointmentbuttonText}>Check Appointments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.MyTasksButton}>
          <Text style={styles.AppointmentbuttonText}>My Tasks</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.UpdateButton} onPress={handleUpdateProfile}>
          <Text style={styles.UpdateButtonText}>Update Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.HistoryButton}>
          <Text style={styles.AppointmentbuttonText}>History</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default PetSitterProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: 415,
    height: 63,
    marginLeft: 0,
    marginTop: 40,
    flexShrink: 0,
    borderRadius: 30,
    backgroundColor: "#C57AFF",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 10px 15px 0px rgba(0, 0, 0, 0.25)",
  },
  headerText: {
    width: 254,
    height: 26.54,
    flexShrink: 0,
    color: "#3D3836",
    textAlign: "center",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 26.54,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  apointment: {
    borderRadius: 20, // Updated style for check appointment button
    backgroundColor: "#C57AFF", // Updated style for check appointment button
    boxShadow: "0px 10px 15px 0px rgba(0, 0, 0, 0.25)", // Updated style for check appointment button
    padding: 10,
    marginLeft : 55,
    marginTop: 80,
    marginBottom: 10,
    width: 300, // Adjust the width as needed
    justifyContent: "center",
    alignItems: "center",
  },
  AppointmentbuttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  MyTasksButton: {
    borderRadius: 20, // Updated style for My Tasks button
    marginLeft:130,
    backgroundColor: "#FFA149", // Updated style for My Tasks button
    boxShadow: "0px 10px 15px 0px rgba(0, 0, 0, 0.25)", // Updated style for My Tasks button
    padding: 10,
    marginBottom: 10,
    width: 150, // Adjust the width as needed
    justifyContent: "center",
    alignItems: "center",
    marginTop:50,
  },
  UpdateButton: {
    borderRadius: 20, // Updated style for Update Profile button
    marginLeft:100,
    backgroundColor: "#C57AFF", // Updated style for Update Profile button
    boxShadow: "0px 10px 15px 0px rgba(0, 0, 0, 0.25)", // Updated style for Update Profile button
    padding: 10,
    marginBottom: 10,
    width: 220, // Adjust the width as needed
    justifyContent: "center",
    alignItems: "center",
    marginTop:50,
  },
  UpdateButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  HistoryButton: {
    borderRadius: 20, // Updated style for History button
    backgroundColor: "#FFA149", // Updated style for History button
    boxShadow: "0px 10px 15px 0px rgba(0, 0, 0, 0.25)", // Updated style for History button
    padding: 10,
    marginLeft:130,
    marginTop:50,
    width: 150, // Adjust the width as needed
    justifyContent: "center",
    alignItems: "center",
  },
});